import React from "react";
// import logo from "../../logo.jpg";
import { Button, Container, Navbar as BSNavbar, Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <BSNavbar
      collapseOnSelect
      // try fixed="top"
      sticky="top"
      expand="md"
      bg="dark"
      variant="dark"
    >
      <Container fluid>
        <BSNavbar.Brand href="#home">MX Picks</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BSNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#top">Top</Nav.Link>
            <Nav.Link href="#how-it-works">How It Works</Nav.Link>
            <Nav.Link href="#get-started">Get Started</Nav.Link>
            <Button variant="outline-info">Login</Button>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
