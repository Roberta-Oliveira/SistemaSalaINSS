import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Balcao = () => {
  return (
    <>
      <br />
      <Row>
        <Col md={4}>
          <Card className="text-center" style={{ width: "18rem" }}>
            <ListGroup action variant="Primary">
              <Link to="/balcao/detalhes">
                <ListGroup.Item>Balcão</ListGroup.Item>
              </Link>
            </ListGroup>
            <ListGroup variant="flush">
              <Link className="btn-primary" to="/">
                <ListGroup.Item>Tempo de espera 30min</ListGroup.Item>
              </Link>
              <ListGroup.Item action href="">
                Atendimento mais de 30min
              </ListGroup.Item>
              <ListGroup.Item action href="">
                Senhas prioritárias acima de 30min
              </ListGroup.Item>
              <ListGroup.Item action href="">
                Disponibilidade do Servidor
              </ListGroup.Item>
              <ListGroup.Item action href="">
                Aguadando atendimento
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <br />

        <Col md={{ span: 4, offset: 1 }}>
          <Card className="text-center" style={{ width: "18rem" }}>
            <ListGroup action variant="Primary">
              <Link to="/">
                <ListGroup.Item>PMF</ListGroup.Item>
              </Link>
            </ListGroup>
            <ListGroup variant="flush">
              <Link className="btn-primary" to="/">
                <ListGroup.Item>Tempo de espera 30min</ListGroup.Item>
              </Link>
              <ListGroup.Item action href="">
                Atendimento mais de 30min
              </ListGroup.Item>
              <ListGroup.Item action href="">
                Aguadando atendimento
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Col md={4}>
          <Card className="text-center" style={{ width: "18rem" }}>
            <ListGroup action variant="Primary">
              <Link to="/">
                <ListGroup.Item>SS</ListGroup.Item>
              </Link>
            </ListGroup>
            <ListGroup variant="flush">
              <Link className="btn-primary" to="/">
                <ListGroup.Item>Vagas por profissional</ListGroup.Item>
              </Link>
              <ListGroup.Item action href="">
                Tempo de espera mais de 30min
              </ListGroup.Item>
              <ListGroup.Item action href="">
                Atendimento a mais de uma hora
              </ListGroup.Item>
              <ListGroup.Item action href="">
                Aguadando atendimento
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <br />

        <Col md={{ span: 4, offset: 1 }}>
          <Card className="text-center" style={{ width: "18rem" }}>
            <ListGroup action variant="Primary">
              <Link to="/">
                <ListGroup.Item>Sistemas</ListGroup.Item>
              </Link>
            </ListGroup>
            <ListGroup variant="flush">
              <Link className="btn-primary" to="/">
                <ListGroup.Item>Falhas do Assíncrono</ListGroup.Item>
              </Link>
              <ListGroup.Item action href="">
                Falha na Sincronização do SAT
              </ListGroup.Item>
              <ListGroup.Item action href="">
                Circuito Indisponível (COCAR)
              </ListGroup.Item>
              <ListGroup.Item action href="">
                Tráfego Alto
              </ListGroup.Item>
              <ListGroup.Item action href="">
                Capacidade em disco do servidor supererior a 90%
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Col md={4}>
          <Card className="text-center" style={{ width: "18rem" }}>
            <ListGroup action variant="Primary">
              <Link to="/">
                <ListGroup.Item>Agenda</ListGroup.Item>
              </Link>
            </ListGroup>
            <ListGroup variant="flush">
              <Link className="btn-primary" to="/">
                <ListGroup.Item>Insucesso Administrativo</ListGroup.Item>
              </Link>
              <ListGroup.Item action href="">
                Insucesso Serviço Social
              </ListGroup.Item>
              <ListGroup.Item action href="">
                Agendamento superior a 90 dias - Serv. Social
              </ListGroup.Item>
              <ListGroup.Item action href="">
                Aguadando atendimento
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <br />

        <Col md={{ span: 4, offset: 1 }}>
          <Card className="text-center" style={{ width: "18rem" }}>
            <ListGroup action variant="Primary">
              <Link to="/">
                <ListGroup.Item>Perfil</ListGroup.Item>
              </Link>
            </ListGroup>
            <ListGroup variant="flush">
              <Link className="btn-primary" to="/">
                <ListGroup.Item>Unidade ABCD</ListGroup.Item>
              </Link>
              <ListGroup.Item action href="">
                Homologação SISREF
              </ListGroup.Item>
              <ListGroup.Item action href="">
                Atualização Portal COVID
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Col md={4}>
          <Card className="text-center" style={{ width: "18rem" }}>
            <ListGroup action variant="Primary">
              <Link to="/">
                <ListGroup.Item>Produtividade</ListGroup.Item>
              </Link>
            </ListGroup>
            <ListGroup variant="flush">
              <Link to="/">
                <ListGroup.Item>Abaixo de 50% - Designados</ListGroup.Item>
              </Link>
              <ListGroup.Item action href="">
                Tarefas em atraso na Unidade
              </ListGroup.Item>
              <ListGroup.Item action href="">
                Agendamento superior a 90 dias - Serv. Social
              </ListGroup.Item>
              <ListGroup.Item action href="">
                Aguadando atendimento
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Balcao;
