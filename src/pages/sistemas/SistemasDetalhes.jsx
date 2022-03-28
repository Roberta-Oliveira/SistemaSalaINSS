import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const SistemaslDetalhes = () => {
  return (
    <>
      <br />

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Falha na Sincronização do SAT (Hora da última sincronização com
            sucesso)
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Falha no assíncrono (arquivos que não migram)
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>Circuito</ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Link para monitoramento de sistermas e Links Fornecidos pela DTI
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>
            Suporte INSS abertos e não encerrados (Tempo em aberto)
          </ListGroup.Item>
        </Link>
      </ListGroup>

      <ListGroup variant="flush">
        <Link className="text-white" to="/">
          <ListGroup.Item>SDM abertos</ListGroup.Item>
        </Link>
      </ListGroup>
    </>
  );
};

export default SistemaslDetalhes;
