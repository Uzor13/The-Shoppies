import React from 'react';
//Router
import {Link} from 'react-router-dom';

//Bootstrap
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Link to="/">
                <Navbar.Brand>
                    <h1 style={{color: '#FFFFFD'}}>The Shoppies</h1>
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/">
                        <ul style={{color: '#FFFFFD'}}>Home</ul>
                    </Link>
                    <Link to="/nomination">
                        <ul style={{color: '#FFFFFD'}}>Nominations</ul>
                    </Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;