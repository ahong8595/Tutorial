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
      <h1>Andrew Hong's Website</h1>
      <p>Hi there! Welcome to my personal portfolio. Click on the top-right link for my resume!</p>
    </Container>
  </div>
}

export default App;