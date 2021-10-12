 import React from 'react'
 import { Navbar,Nav } from 'react-bootstrap'
import logo from './logo.png';
import Container1 from './containers/Container1/Container1'
import Container2 from './containers/Container2/Container2'
import Footer from './containers/Footer/Footer'  

import './App.css';

function App() {
  return (
    <div className="App">
    
     <Navbar   expand="lg" sticky="top" className="nav">
                                <Navbar.Brand href="#home">  <img src={logo} className="navlogo" alt="Logo" /></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                    <Nav>
                                    <Nav.Link href="/">Create Account</Nav.Link>
                                    <Nav.Link href="/">Login</Nav.Link>
                                    <Nav.Link href="/">Help</Nav.Link>
                                   
                                    </Nav>
                                   
                                </Navbar.Collapse>
                            </Navbar>



  
  
    <Container1 />
    ]<Container2 />
    <Footer />
    </div>
  );
}

export default App;
