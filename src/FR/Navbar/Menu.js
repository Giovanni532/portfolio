import React from 'react'
import Scrollchor from 'react-scrollchor';
import { Nav, Navbar } from 'react-bootstrap'

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Scrollchor to="#competences" className="navbar-brand">Compétences</Scrollchor>
                    <Scrollchor to="#projet" className="navbar-brand">Projet</Scrollchor>
                    <Scrollchor to="#contact" className="navbar-brand">Contact</Scrollchor>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu