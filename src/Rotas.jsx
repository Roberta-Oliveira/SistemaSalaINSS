import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import BalcaoDetalhes from "./pages/balcao/BalcaoDetalhes";
//import Inicio from "./pages/inicio/Inicio";
import ServicoSocialDetalhes from "./pages/servicosocial/ServicoSocialDetalhes";
import PMFDetalhes from "./pages/pmf/PMFDetalhes";
import AgendaDetalhes from "./pages/agenda/AgendaDetalhes";
import SistemaslDetalhes from "./pages/sistemas/SistemasDetalhes";
import PerfilDetalhes from "./pages/perfil/PerfilDetalhes";
import ProdutividadeDetalhes from "./pages/produtividade/ProdutividadeDetalhes";
import Balcao from "./pages/balcao/Balcao";

const Routers = () => {
  return (
    <>
      <Container className="md-3">
        <Routes>
          <Route path="/" element={<Balcao />} />
          <Route path="/balcao" element={<Balcao />} />
          <Route path="/balcao/detalhes" element={<BalcaoDetalhes />} />
          <Route
            path="/servico/social/detalhes"
            element={<ServicoSocialDetalhes />}
          />
          <Route path="/pmf/detalhes" element={<PMFDetalhes />} />
          <Route path="/agenda/detalhes" element={<AgendaDetalhes />} />
          <Route path="/sistemas/detalhes" element={<SistemaslDetalhes />} />
          <Route path="/perfil/detalhes" element={<PerfilDetalhes />} />
          <Route
            path="/produtividade/detalhes"
            element={<ProdutividadeDetalhes />}
          />
        </Routes>
      </Container>
    </>
  );
};

export default Routers;
