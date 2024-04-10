import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import favicon from "../img/img/favicon.png";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="container">
        <Navbar.Brand as={Link} to="/">
          <img
            src={favicon}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/Blog" activeClassName="active">
              Blog
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Réalisation" activeClassName="active">
              Réalisation
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Contact" activeClassName="active">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Services" activeClassName="active">
              Services
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
