import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" className="flex-column" style={{ height: '100vh', position: 'fixed', width: '200px' }}>
            <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
            <Nav className="flex-column">
                <Nav.Link href="#skills" style={{ color: 'white' }}>Skills</Nav.Link>
                <Nav.Link href="#projects" style={{ color: 'white' }}>Projects</Nav.Link>
                <Nav.Link href="#experience" style={{ color: 'white' }}>Experience</Nav.Link>
                <Nav.Link href="#contact" style={{ color: 'white' }}>Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default SideNavbar;
