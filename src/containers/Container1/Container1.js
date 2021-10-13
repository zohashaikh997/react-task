 import React from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap'
import applogo from './appstore.png';
import playstorelogo from './playstore.png';

import './Container1.css';

function Container1() {
  return (
    <div>
    
    <Container className="imgcontainer" fluid >
    <div className="select-platform">
  <Row >
 <Row>
      <Col><h3>DISCOVER A NEW WAY TO SELL ONLINE</h3></Col>
  </Row>
    <Col>Control your sales and payment</Col>
    
  </Row>
 <Row>
    <div>
      <button type="button" class="btn btn-link"><img src={applogo}  alt="App Store" /></button>

      
  <button type="button" class="btn btn-link"><img src={playstorelogo}  alt="Play Store" /></button>
    </div>
 </Row>
</div>
</Container>

    </div>
  );
}

export default Container1;
