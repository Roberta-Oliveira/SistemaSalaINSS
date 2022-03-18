import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Inicio from "./pages/Inicio";

const Routers = () => {
  return (
    <>
      <Container className="md-3">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
      </Container>
    </>
  );
};

export default Routers;
