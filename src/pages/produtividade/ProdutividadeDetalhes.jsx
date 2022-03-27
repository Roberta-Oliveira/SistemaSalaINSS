import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProdutividadeDetalhes = () => {
  return (
    <>
      <br />

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Tarefas em atraso na unidade</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Tarefas liberadas para análise</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Tarefas pendentes na unidade</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Estoque na unidade</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Estoque com servidores da unidade</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>
            Percentual de absorção da unidade entrada x saída
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>
            Detalhamento dos servidores designados
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>
            Quantidade de tarefas criadas na unidade (Agência de relacionamento)
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>
            Quantidade de tarefas concluidas por servidores lotados na unidade{" "}
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>
            Quantidade de tarefas concluidas por servidores lotados na unidade -
            BMOB
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>
            Saldo (Criadas - Total concluidas)Acumulados no Mês{" "}
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link to="/">
          <ListGroup.Item>Detalhamentos E-Tarefas</ListGroup.Item>
        </Link>
      </ListGroup>
    </>
  );
};

export default ProdutividadeDetalhes;
