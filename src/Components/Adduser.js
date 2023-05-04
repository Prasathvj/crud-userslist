import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";


function Adduser({user,setUser}){
   
    const history = useHistory();
    const [name,setName]=useState('');
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');

   
   async function adduser(){
    const newUser={
        name,
        username,
        email
    }
    const response= await fetch('https://644b33c24bdbc0cc3a8ce304.mockapi.io/users',{
    method:'POST',
    body:JSON.stringify(newUser),
    headers :{
        "Content-Type":"application/json"
    },
    })
     const data = response.json() ;
     setUser([...user, data]);
     history.push('/');
    }

    return (
            <Base
            title={'ADD NEW USER'}
            description={'you can add your details here'}
            des2={'(NOTE: once enter your details, click the sumbit button and go to the homepage then refresh the page then you can see your details in the table)'}
            >
            <div className="form">

                <label for="name"><h5>Name</h5></label>
                    <input
                    type="text"
                    placeholder="Enter name"
                    id="name"
                    value={name}
                    onChange={(ele)=>setName(ele.target.value)}
                    /> <br/>

                <label for="username"><h5>Username</h5></label>
                    <input
                    type="text"
                    placeholder="Enter user name"
                    id="username"
                    value={username}
                    onChange={(ele)=>setUsername(ele.target.value)}
                    /> <br/>

                <label for="email"><h5>Email</h5></label>
                    <input
                    type="email"
                    placeholder="Enter mail"
                    id="email"
                    value={email}
                    onChange={(ele)=>setEmail(ele.target.value)}
                    /> <br/>
                    <Button variant="dark"
                     onClick={adduser}
                     >Submit</Button>
                

            </div>
            </Base>
    )
}
export default Adduser