import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const PerfilDetalhes = () => {
  return (
    <>
      <br />

      <h2>Perfil Detalhes</h2>

      <br />

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>Notas do atendimento da APS</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Servidores/Listas por programas/Designados
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>Ouvidoria</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>Ouvidoria a mais de 30 dias</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>Abrangência</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>Manutenção</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>Imagens na Unidade</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>Unidade com e sem perícia</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>Feriados</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>Capacidade de atendimento</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-success" to="/">
          <ListGroup.Item className="bg-success text-white">
            Atendimento interrompido/Prejudicado/Motivo - Campo informado pelo
            gerente da APS. Listas de motivos: enchente, incêndio, invasão,
            arrombamento, roubo de equipamentos, reforma, greve, falta de
            vigilância, falta de servidores, outros, desinfecção, max de 140
            caracteres
          </ListGroup.Item>
        </Link>
      </ListGroup>
      <br />
    </>
  );
};

export default PerfilDetalhes;
