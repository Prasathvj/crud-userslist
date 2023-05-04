import './App.css';
import Bash from './Base/Base';
import { useEffect, useState } from 'react';
import Userlist from './Components/Userslist';
import Adduser from './Components/Adduser';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import UpdateUser from './Components/Updateuser';
import Viewuser from './Components/Viewuser';

function App() {
  const [user, setUser]=useState([])

  useEffect(()=>{
    const getUsers = async ()=>{
      const response= await fetch('https://644b33c24bdbc0cc3a8ce304.mockapi.io/users',{
        method:'GET',
      });
      const data= await response.json();
      if(data){
        setUser(data)
      }
    }
    getUsers();
  },[])
  return (
    <div className="App">

      <Switch>
        <Route exact path='/'>
          <Userlist
            user={user}
            setUser={setUser}/>
        </Route>

        <Route path='/add'>
          <Adduser
            user={user}
            setUser={setUser}/>
        </Route>

        <Route path='/edit/:id'>
          <UpdateUser
            user={user}
            setUser={setUser}/>
        </Route>

        <Route path='/view/:idx'>
          <Viewuser
            user={user}
            setUser={setUser}
            />
        </Route>
      
      </Switch>

    </div>
    
    
  );
}

export default App;
