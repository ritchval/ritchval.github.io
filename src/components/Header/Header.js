import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"; // Import specific icons
import "./Header.css";

function Header({ theme, toggleTheme }) {
  const [expand, setExpand] = useState(false);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className="navbar sticky"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <strong className="main-name">Ricardo Valdez Group</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/founder" onClick={() => setExpand(false)}>Founder</Nav.Link> {/* Changed path and text */}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/research" onClick={() => setExpand(false)}>Research</Nav.Link> 
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/projects" onClick={() => setExpand(false)}>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/courses" onClick={() => setExpand(false)}>Courses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/alumni" onClick={() => setExpand(false)}>Alumni</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/positions" onClick={() => setExpand(false)}>Open Positions</Nav.Link>
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center"> {/* Added alignment classes */}
              <Button
                variant="outline-light" // This variant is mostly overridden by our custom CSS
                onClick={toggleTheme}
                className="theme-toggle-btn"
                // size="sm" // Size is now controlled by font-size in CSS
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;