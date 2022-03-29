import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const AgendaDetalhes = () => {
  return (
    <>
      <br />

      <h2>Agendamento Detalhes</h2>

      <br />

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Lista de serviços sem servidores cadastrados para atendimento
            agendado
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Lista de quantidade de inducessos por serviço
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Lista de quantidade de inducessos por serviço cadastrado para
            atendiemento agendado
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Quantidade de servidores ideal para o atendimento agendado
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Lista de serviços não disponíveis na unidade
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Lista de serviços atendidos na unidade
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Lista de quantidade de inducessos por serviço - serviço social
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Lista de quantidade de inducessos por servidor cadastrado para
            atendiemnto agendado
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Quantidade de servidores ideal para o atendimento agendado - serviço
            social
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Lista de serviços não disponíveis na unidade - serviço social
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Lista de serviços atendidos na unidade - serviço social
          </ListGroup.Item>
        </Link>
      </ListGroup>
      <br />
    </>
  );
};

export default AgendaDetalhes;
