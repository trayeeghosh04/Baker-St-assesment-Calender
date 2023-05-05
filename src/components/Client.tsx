import React from 'react'
import { Col, Container,Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Client() {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Calender">Calendar</Nav.Link>
            <Nav.Link href="/Client">Client Details</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <Container>
        <Row>
        <Col>  <Card style={{ width: '14rem',backgroundColor:'#F08080'}}>
      <Card.Body>
        <Card.Title>Brad Pitt</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Date</Card.Subtitle>
        <Card.Text>
         03.13.23
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Time</Card.Subtitle>
        <Card.Text>
        12:00 pm
        </Card.Text>
    
        <Card.Subtitle className="mb-2 text-muted">Session</Card.Subtitle>
        <Card.Text>
         30 Min
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Cost</Card.Subtitle>
        <Card.Text>
     $80
        </Card.Text>
        <Card.Link href="calender">Calendar</Card.Link>
        
      </Card.Body>
    </Card></Col>
        <Col> <Card style={{ width: '14rem',backgroundColor:'#ADD8E6'}}>
      <Card.Body>
        <Card.Title>Adam Cohen</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Date</Card.Subtitle>
        <Card.Text>
         03.14.23
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Time</Card.Subtitle>
        <Card.Text>
        01:00 pm
        </Card.Text>
    
        <Card.Subtitle className="mb-2 text-muted">Session</Card.Subtitle>
        <Card.Text>
         45 Min
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Cost</Card.Subtitle>
        <Card.Text>
     $120
        </Card.Text>
        <Card.Link href="calender">Calendar</Card.Link>
        
      </Card.Body>
    </Card></Col>
        <Col>    <Card style={{ width: '14rem',backgroundColor:'#F08080'
    }}>
      <Card.Body>
        <Card.Title>Angela Simpson</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Date</Card.Subtitle>
        <Card.Text>
         04.12.23
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Time</Card.Subtitle>
        <Card.Text>
        10:00 am
        </Card.Text>
    
        <Card.Subtitle className="mb-2 text-muted">Session</Card.Subtitle>
        <Card.Text>
         60 Min
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Cost</Card.Subtitle>
        <Card.Text>
     $160
        </Card.Text>
        <Card.Link href="calender">Calendar</Card.Link>
        
      </Card.Body>
    </Card></Col>
      </Row>
        </Container>
        
    

    </div>
  )
}
