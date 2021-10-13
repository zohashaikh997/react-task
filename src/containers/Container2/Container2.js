 import React from 'react'
import { Card,Row,Col, Container } from 'react-bootstrap'
import './Container2.css'


function Container2() {
  return (
    <div>
        <Container>
            <Row className='container2'>
            
                <Col sm={4}>
                <Card className='card1'>
                    <Card.Body>
                    <Card.Title>Internet Security</Card.Title>
                    <Card.Text>
                        With payment link, you can sell securely on social network.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={4}>
                 <Card  className='card2'>
                    <Card.Body>
                    <Card.Title>QR Code</Card.Title>
                    <Card.Text>
                        Increase the sales of your physical store, with QR code catalog.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={4}>
                 <Card className='card3'>
                    <Card.Body>
                    <Card.Title>Digital Solution</Card.Title>
                    <Card.Text>
                        Availability, conversation and security for your business
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
  
  </Container>
    </div>
  );
}

export default Container2;
