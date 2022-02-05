import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        collapseOnSelect
        sticky="top"
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="home">
            Genius Mechanic
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end" id="navbarScroll">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/experts">
              Experts
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            {user?.email ? (
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {user.email && (
              <Navbar.Text>
                Signed in as: <span>{user.displayName}</span>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
