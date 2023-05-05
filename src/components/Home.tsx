import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Css/Home.css';

import Col from 'react-bootstrap/Col';
function Home() {
  return (
    <>

   
<div className='main'style={{
        backgroundImage: `url('/Home.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}  >

    

      <Navbar bg="primary" variant="dark">
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
        <Container >
            <Row>
                <Col >
                <h3 style={{color:"	#DE3163"}} >
                Name:- Trayee Ghosh<br></br>
                Class:-Mca 3rd Year<br></br>
                College Name:- Techno India Hooghly <br></br>
                Subject:- Calender Assessment
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