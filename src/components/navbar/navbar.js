import React, { useState, useEffect } from "react"
// import logo from "../../logo.jpg";
import { Button, Container, Navbar, Nav } from "react-bootstrap"
import './navbar.scss'

export default function TopNav({ loggedIn, handleLogin }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = e => {
    console.log(e)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="md"
    >
      <Container fluid>
        <Navbar.Brand href="#home">MX PICKS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#top">Top</Nav.Link>
            <Nav.Link href="#how-it-works">How It Works</Nav.Link>
            <Nav.Link href="#get-started">Get Started</Nav.Link>
            <Button
              variant={loggedIn ? "outline-danger" : "outline-info"}
              onClick={handleLogin}>{loggedIn ? "Logout" : "Login"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
