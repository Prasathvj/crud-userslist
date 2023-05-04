import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import { useHistory} from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

function UpdateUser({user, setUser}){
    const {id}= useParams();
    const editTheuser= user[id]
    const history = useHistory();
    const [name,setName]=useState('');
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');

    useEffect(()=>{
        setName(editTheuser.name);
        setUsername(editTheuser.username)
        setEmail(editTheuser.email)
        console.log(id)
    },[editTheuser])


   async function edituser(){
    console.log(user)
    const editUser={
        name,
        username,
        email
    }
    const response= await fetch(`https://644b33c24bdbc0cc3a8ce304.mockapi.io/users/${editTheuser.id}`,{
    method:'PUT',
    body:JSON.stringify(editUser),
    headers :{
        "Content-Type":"application/json"
    },
    })
     const data =await response.json() ;
     if(data){
    user[id]=editUser
    setUser([...user])
     console.log(data)
     
     history.push('/');
     }
    }

    return (
        <div>
            <Base
            title={'Users Dashboard'}
            description={'you can add your details here'}
            >
            <div className="form">

                <label for="name">Name</label>
                    <input
                    type="text"
                    placeholder="Enter name"
                    id="name"
                    value={name}
                    onChange={(ele)=>setName(ele.target.value)}
                    /> <br/>

                <label for="username">Username</label>
                    <input
                    type="text"
                    placeholder="Enter user name"
                    id="username"
                    value={username}
                    onChange={(ele)=>setUsername(ele.target.value)}
                    /> <br/>

                <label for="email">Email</label>
                    <input
                    type="email"
                    placeholder="Enter mail"
                    id="email"
                    value={email}
                    onChange={(ele)=>setEmail(ele.target.value)}
                    /> <br/> 
                     <Button variant="dark"
                     onClick={edituser}
                     >Submit</Button>
                

            </div>
            </Base>
        </div>
    )
}
export default UpdateUser