import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const PMFDetalhes = () => {
  return (
    <>
      <br />

      <h2>PMF Detalhes</h2>

      <br />

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Relação de agendamentos, por serviço, e por profissional (agenda do
            dia) - Agenda do PMF Gestão
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>Aguardando Atendimento</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Estoque de agendamentos por unidade - BG Agenda PMF
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/painelpmf">
          <ListGroup.Item>Link para o Painel PMF</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>TMEA - BG Agenda PMF</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>TMAA PMF - BG Agenda PMF</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>TME (Espera)</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Quantidade de tarefas de pós perícia pendentes - GET
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Tarefas puxadas no mês - PMF Tarefas (Só existe em nível nacional)
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Saldo (puxadas - total concluidas) Acumulado no mês
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Quantidadede peritos em atendimento presencial na unidade - BG
            Gestão
          </ListGroup.Item>
        </Link>
      </ListGroup>
      <br />
    </>
  );
};

export default PMFDetalhes;
