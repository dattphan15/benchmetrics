import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Benchmetrics</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
    </>
  );
}

export default App;
