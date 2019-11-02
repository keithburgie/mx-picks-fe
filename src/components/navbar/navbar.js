import React, { useState } from "react"
// import logo from "../../logo.jpg";
import { Button, Container, Navbar, Nav } from "react-bootstrap"
import './navbar.scss'

export default function TopNav({ loggedIn, handleLogin }) {
  const [scrolled, setScrolled] = useState(false);

  // Detect when mobile navigation is opened
  const toggleNav = () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.contains('menu-open')
      ? navbar.classList.remove('menu-open')
      : navbar.classList.add('menu-open');
  }

  // Detect when scrolled to top of page
  const detectTop = () => {
    const root = document.documentElement
    root.scrollTop > 0 ? setScrolled(true) : setScrolled(false);
  }

  window.onscroll = () => detectTop()

  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="md"
      className={scrolled && "is-scrolled"}
    >
      <Container fluid>
        <Navbar.Brand href="#home">MX PICKS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNav} />
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
