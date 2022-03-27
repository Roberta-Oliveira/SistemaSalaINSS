import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import logo from "./lg.png";

const Menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} width="80" height="50" alt="" /> SALA
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
