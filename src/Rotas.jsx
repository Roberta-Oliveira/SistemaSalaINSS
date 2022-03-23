import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Balcao from "./pages/balcao/Balcao";
import ServicoSocial from "./pages/servicosocial/ServicoSocial";
import BalcaoDetalhes from "./pages/balcao/BalcaoDetalhes";
import Inicio from "./pages/Inicio";

const Routers = () => {
  return (
    <>
      <Container className="md-3">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/balcao/detalhes" element={<BalcaoDetalhes />} />

          <Route path="/servicosocial" element={<ServicoSocial />} />
        </Routes>
      </Container>
    </>
  );
};

export default Routers;
