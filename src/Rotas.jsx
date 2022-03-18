import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Balcao from "./pages/balcao/Balcao";

const Routers = () => {
  return (
    <>
      <Container className="md-3">
        <Routes>
          <Route path="/" element={<Balcao />} />
          <Route path="/balcao" element={<Balcao />} />
        </Routes>
      </Container>
    </>
  );
};

export default Routers;
