import React, { useState } from "react";
import Base from "../Base/Base";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

function Userlist({user,setUser}){
  const history = useHistory();
  
async function deleteUser(useid){
  const response= await fetch(`https://644b33c24bdbc0cc3a8ce304.mockapi.io/users/${useid}`,{
    method:'DELETE',
  });
  const data = response.json();
  if(data){
    const remainUser=user.filter((use,idx)=>(use.id !== useid))
    setUser(remainUser)
  }
  }
   
    return (
        <div>
            <Base
            title={'Users Dashboard'}
            description={'USERS LIST'}
            des2={'(NOTE: once enter your details refresh the page then you can see your details in below table)'}

            
            >
            <div className='card-container'>
           
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Action</th>

                    </tr>
                  </thead>
                {user.map((use,idx)=>(
                  <tbody key={idx}>
                    <tr>
                      <td>{idx+1}</td>
                      <td>{use.name}</td>
                      <td>{use.username}</td>
                      <td>{use.email}</td>
                      <td>
                        <div className="action">
                          <Button variant="info"
                        onClick={()=>history.push(`/view/${idx}`)}
                        >View</Button>{' '}

                        <Button variant="warning"
                        onClick={()=>history.push(`/edit/${idx}`)}
                        >Edit</Button>{' '}

                        <Button variant="danger"
                        onClick={()=>deleteUser(use.id)}
                        >Delete</Button>{' '}  

                        </div>
                      
                      </td>
                    </tr>
                  </tbody>                        
            ))}
            </Table> 
                           
            </div>
            </Base>
        </div>
    )
}
export default Userlist