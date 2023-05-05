import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Css/Home.css';

import Col from 'react-bootstrap/Col';
function Home() {
  return (
    <>

   
<div className='main'  >

    
   
      <Navbar bg="dark" variant="dark">
        <Container>
      
          <Nav className="me-auto" >
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Calender">Calendar</Nav.Link>
            <Nav.Link href="/Client">Client Details</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br>
      </br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <center>
        <Container style={{backgroundColor:"	#A9A9A9"}}>
            <Row>
                <Col >
                <h3 style={{color:"	#800020"}} >
                Name:- Prokash Malo<br></br>
                Class:-Mca Final Year<br></br>
                College Name:- Techno India Hooghly <br></br>
                Subject:- Assessment
                </h3>
                </Col>
            </Row>
        </Container>
        </center>
   
      </div>

      </div>
    </>
  );
}

export default Home;