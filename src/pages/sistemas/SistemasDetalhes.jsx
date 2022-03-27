import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const SistemaslDetalhes = () => {
  return (
    <>
      <br />

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>
            Quantidades de atendimentos presencias e a distância
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Relação de Insucessos</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>
            Relação dos agendamentos superiores a 90 dias
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Relação dos agendamentos do dia</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>TMEA</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>TMA</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>
            Quantidade de atendiementos por servidor
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Média de atendiemento por servidores</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>
            Quantidade de atendimentos agendados e não agendados
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Percentual de comparecimento</ListGroup.Item>
        </Link>
      </ListGroup>
    </>
  );
};

export default SistemaslDetalhes;
