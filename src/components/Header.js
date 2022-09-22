import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

import "./Header.css";

class Header extends React.Component {
    render() {
        return <Navbar expand="lg" className="navi">
            <Container>
                <Navbar.Brand className="link" href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="link" href="https://andrew-hong.herokuapp.com/resume">Résume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    }
}

export default Header;