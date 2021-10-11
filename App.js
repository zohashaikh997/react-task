 import React from 'react'
 import { Navbar,Nav,Container,Row,Col } from 'react-bootstrap'
import logo from './logo.png';
import car from './background.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="row">
        <div className="col-md-12">
     <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="nav">
                                <Navbar.Brand href="#home">  <img src={logo} className="navlogo" alt="Logo" /></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav>
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about-us">Contact Us</Nav.Link>
                                    <Nav.Link href="/contact-us">About Us</Nav.Link>
                                   
                                    </Nav>
                                   
                                </Navbar.Collapse>
                            </Navbar>



    </div></div>
    <Container className="imgcontainer" >
  <Row>
    <Col>1 of 1</Col>
  </Row>
</Container>
    </div>
  );
}

export default App;
