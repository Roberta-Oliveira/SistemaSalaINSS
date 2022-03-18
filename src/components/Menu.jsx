import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://static.vecteezy.com/system/resources/previews/000/616/253/original/home-logo-and-symbols-vector.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            SISTEMA SALA
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
