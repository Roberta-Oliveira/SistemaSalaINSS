import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./ps.png";

const Menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className="text-white " href="/">
                <img src={logo} width="100" height="60" alt="" /> SALA
              </Nav.Link>
            </Nav>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
