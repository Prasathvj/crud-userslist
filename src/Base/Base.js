import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function Base({title,description,des2,children}){
    const history = useHistory();
    return (
        <section>
            <div className="nav1">
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home"
                 onClick={(()=>history.push('/add'))}
                >
                    <img
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    />{' '}
                    Users Dashboard
                </Navbar.Brand>
                </Container>
            </Navbar>
            </div>
        
            <div className="main-contet">
                <div className="left-content">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link href="#"
                                 onClick={(()=>history.push('/'))}
                                >Users List</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>

                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link href="#"
                               onClick={(()=>history.push('/add'))}
                                >Add New User</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                <div className="right-content">
                    <h2 className="title">{title}</h2>
                    <br/>
                    <h4 className="des">{description}</h4>
                    <p>{des2}</p>
                    <p>{children}</p>
                </div>
            </div>
        </section>
    )
}
export default Base