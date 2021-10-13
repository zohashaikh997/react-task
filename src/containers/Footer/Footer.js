import React from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import { FaPhoneSquareAlt } from "react-icons/fa";
import {MdEmail } from "react-icons/md";
import { BsFillPersonFill} from "react-icons/bs";
import {MdOutlineLogin } from "react-icons/md";
import { IoIosHelpCircle} from "react-icons/io";
import {AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebookF} from "react-icons/fa";
import {BsInstagram } from "react-icons/bs";
import { ImYoutube2} from "react-icons/im";
import {ImWhatsapp } from "react-icons/im";

      
      
import { Link } from 'react-router-link'

import './Footer.css'


function Footer() {
  return (
    <div>
        <Container className='footer' fluid>
         <Row>
            
     <Col  className='col1' md={{ span: 5, offset: 1 }}>
         <h3>
             ABOUT
         </h3>
         <p>This is about the bayqi seller panel which providers information for the user.
              panel which providers his information for the user the bayqi seller. 
              providers information for the user.</p>

     </Col>
   
     <Col sm={3} className='col1'>
         <h4>CONTACT</h4>
         <p><FaPhoneSquareAlt /> 939 725 027</p>
        <p> <MdEmail />  apoioclient@bayqi.com</p>
     </Col>
    <Col sm={2} className='col1'>
    <h4> QUICK LINKS</h4>
    
    <Row><Link to="/about" className="link"><BsFillPersonFill /> Create Account</Link></Row>
    <Row><Link to="/about" className="link"><MdOutlineLogin /> Login</Link></Row>
    <Row><Link to="/about" className="link"><IoIosHelpCircle /> Help</Link></Row>


    </Col>
    
  </Row>
  <hr className='line'></hr>
  
  <Row>
      
      <Col  className='footerleft' md={{ span: 4, offset: 1 }}>
          <p className='footertext'>All Rights Reserved. <AiOutlineCopyrightCircle /> BayQi 2021</p>
      </Col>
     
      <Col className='footerright' md={{ span: 3, offset: 4 }}>
      
       <FaFacebookF className='socialmedia-link' />
      <BsInstagram className='socialmedia-link' />
      <ImYoutube2 className='socialmedia-link' />
      <ImWhatsapp className='socialmedia-link' />
      </Col>

  </Row>
   
        </Container>
    </div>
  );
}

export default Footer;
