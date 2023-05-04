import React, { useEffect } from "react";
import Base from "../Base/Base";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Viewuser({user,setUser}){
const history=useHistory();
 const {idx} = useParams();
 const viewTheuser= user[idx]

    return (
        <Base
        title={'VIEW USER DETAILS'}
        description={'you can see your details'}
        des2={'(NOTE: If any mistake in your details, you can edit your details) '}
        >
            <div className="details">
               

                <Card className="text-center">
                    <Card.Header>User's Details</Card.Header>
                    <Card.Body>
                        <Card.Title><p>Name :  {viewTheuser.name}</p></Card.Title>
                        <Card.Title><p>User Name :{viewTheuser.username}</p></Card.Title>
                        <Card.Title><p>Email :{viewTheuser.email}</p></Card.Title>
                        <br/>   
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button variant="info"
                        onClick={()=>history.push('/')}
                        >Back to homepage</Button>
                    </Card.Footer>
                </Card>
    
            </div>
            
        
        </Base>
    )
}

export default Viewuser