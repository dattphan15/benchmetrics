import React,{ useEffect } from "react";
import axios from  'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, Nav, Card, Image, Tabs ,Tab } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Overview from "./component/overview";
import Site from "./component/site";
import Traffic from "./component/traffic";

function App() {
  const [data, setData] = React.useState(null);
  const [cardData, setCardData] = React.useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3001/api')
        .then((resp)=>{ 
          
          setCardData(resp.data.data);
        })
  },[])

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  const getCardData = (cardname,type) => {

        let data = cardData.filter((e)=>{ return e.metrics_name == cardname });
      
        return data[0][type]

  }

  return (
    <>
    <Container>
      <Navbar expand="lg" bg="primary">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt=""
              src="BNM_Logo_White.png"
              width="300"
              height="51"
            >
            </img>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="OVERVIEW">
          <Overview  cardData={cardData} />
        </Tab>
        <Tab eventKey="profile" title="TRAFFIC">
          <Traffic cardData={cardData}/>
        </Tab>
        <Tab eventKey="contact" title="SITE PERFORMANCE">
          <Site  cardData={cardData} />
        </Tab>
      </Tabs>

      {/* <Navbar bg="black">
        <Container>
          <Nav.Link href="#overview">OVERVIEW</Nav.Link>
          <Nav.Link href="#traffic">TRAFFIC</Nav.Link>
          <Nav.Link href="#site-performance">SITE PERFORMANCE</Nav.Link>
        </Container>
      </Navbar>
      <Container>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title bg="primary">SESSIONS (SITE TRAFFIC)</Card.Title>
            <Card.Text>
              { getCardData('Sessions (Site Traffic)','metrics_count') }
              <br></br>
              <br></br>
              Week Over Week Change { getCardData('Sessions (Site Traffic)','week_change') }
            </Card.Text>
          </Card.Body>
        </Card>
      </Container> */}

    </Container>
    </>
  );
}

export default App;
