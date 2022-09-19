import React from "react";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import './App.css';

function App() {
  return <div>
    <Header></Header>
    <br />
    <Container>
      <h1>Hello World</h1>
    </Container>
  </div>
}

export default App;