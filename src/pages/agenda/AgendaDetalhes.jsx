import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const AgendaDetalhes = () => {
  return (
    <>
      <br />

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Senhas a mais de 30min</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Resumo do comparecimento</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Relação de agendamentos</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Percentual de comparecimento</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>
            Quantidades de atendimentos agendados e não agendados
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>
            Quantidades de atendimentos agendados e não agendados
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>TMA</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>TME</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Em atendimento 30min</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>
            Quantidade de atendimentos por servidor e (POP-UP) a lista
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Média de atendiemento dos servidores</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Insucesso detalhamento por serviço</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Aguardando atendimento</ListGroup.Item>
        </Link>
      </ListGroup>
    </>
  );
};

export default AgendaDetalhes;
