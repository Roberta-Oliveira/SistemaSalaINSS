import React from "react";

import { ListGroup, Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Inicio.css";
import { FcHighPriority, FcLowPriority, IconName } from "react-icons/fc";

const Inicio = () => {
  return (
    <>
      <br />
      <Row>
        <Col md={4}>
          <Card style={{ width: "30rem" }}>
            <ListGroup
              defaultActiveKey="/"
              variant="flush"
              className="text-center"
            >
              <Link to="/balcao/detalhes">
                <ListGroup.Item className="bg-danger text-white">
                  Balcão
                </ListGroup.Item>
              </Link>
            </ListGroup>

            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <Link to="/balcao/detalhes">
                    <td>Tempo de espera 30min</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">
                    <FcHighPriority /> Desastre
                  </td>
                </tr>

                <tr>
                  <Link to="/balcao/detalhes">
                    <td>Atendimento mais de 30min</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td>
                    <FcHighPriority /> Desastre
                  </td>
                </tr>

                <tr>
                  <Link to="/balcao/detalhes">
                    <td>Senhas prioritárias acima de 30min</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td>
                    <FcHighPriority /> Desastre
                  </td>
                </tr>

                <tr>
                  <Link to="/balcao/detalhes">
                    <td>Disponibilidade do Servidor</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td>
                    <FcLowPriority /> Desastre
                  </td>
                </tr>

                <tr>
                  <Link to="/balcao/detalhes">
                    <td>Aguadando atendimento</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td>
                    <FcHighPriority /> Desastre
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>

        <br />

        <Col md={{ span: 4, offset: 3 }}>
          <Card style={{ width: "30rem" }}>
            <ListGroup
              defaultActiveKey="/"
              variant="flush"
              className="text-center"
            >
              <Link to="/pmf/detalhes">
                <ListGroup.Item>PMF</ListGroup.Item>
              </Link>
            </ListGroup>

            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <Link to="/pmf/detalhes">
                    <td>Tempo de espera 30min</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/pmf/detalhes">
                    <td>Atendimento mais de 30min</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/pmf/detalhes">
                    <td>Aguadando atendimento</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Col md={4}>
          <Card style={{ width: "30rem" }}>
            <ListGroup className="text-center" action variant="Primary">
              <Link to="/servico/social/detalhes">
                <ListGroup.Item>SS</ListGroup.Item>
              </Link>
            </ListGroup>

            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <Link to="/servico/social/detalhes">
                    <td>Vagas por profissional</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/servico/social/detalhes">
                    <td>Tempo de espera mais de 30min</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/servico/social/detalhes">
                    <td>Atendimento a mais de uma hora</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/servico/social/detalhes">
                    <td>Aguadando atendimento</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>

        <br />

        <Col md={{ span: 4, offset: 3 }}>
          <Card style={{ width: "30rem" }}>
            <ListGroup className="text-center" action variant="Primary">
              <Link to="/sistemas/detalhes">
                <ListGroup.Item>Sistemas</ListGroup.Item>
              </Link>
            </ListGroup>

            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <Link to="/sistemas/detalhes">
                    <td>Falhas do Assíncrono</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/sistemas/detalhes">
                    <td>Falha na Sincronização do SAT</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/sistemas/detalhes">
                    <td>Circuito Indisponível (COCAR)</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/sistemas/detalhes">
                    <td>Tráfego Alto</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/sistemas/detalhes">
                    <td>Capacidade em disco do servidor supererior a 90%</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Col md={4}>
          <Card style={{ width: "30rem" }}>
            <ListGroup className="text-center" action variant="Primary">
              <Link to="/agenda/detalhes">
                <ListGroup.Item>Agenda</ListGroup.Item>
              </Link>
            </ListGroup>

            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <Link to="/agenda/detalhes">
                    <td>Insucesso Administrativo</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/agenda/detalhes">
                    <td>Insucesso Serviço Social</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/agenda/detalhes">
                    <td>Agendamento superior a 90 dias - Serv. Social</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/agenda/detalhes">
                    <td>Aguadando atendimento</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>

        <br />

        <Col md={{ span: 4, offset: 3 }}>
          <Card style={{ width: "18rem" }}>
            <ListGroup className="text-center" action variant="Primary">
              <Link to="/perfil/detalhes">
                <ListGroup.Item>Perfil</ListGroup.Item>
              </Link>
            </ListGroup>

            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <Link to="/perfil/detalhes">
                    <td>Unidade ABCD</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/perfil/detalhes">
                    <td>Homologação SISREF</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/perfil/detalhes">
                    <td>Atualização Portal COVID</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Col md={4}>
          <Card style={{ width: "30rem" }}>
            <ListGroup className="text-center" action variant="Primary">
              <Link to="/produtividade/detalhes">
                <ListGroup.Item>Produtividade</ListGroup.Item>
              </Link>
            </ListGroup>

            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <Link to="/produtividade/detalhes">
                    <td>Abaixo de 50% - Designados</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/produtividade/detalhes">
                    <td>Tarefas em atraso na Unidade</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/produtividade/detalhes">
                    <td>Agendamento superior a 90 dias - Serv. Social</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
                <tr>
                  <Link to="/produtividade/detalhes">
                    <td>Aguadando atendimento</td>
                  </Link>
                  <td>23-03-2022</td>
                  <td className="disaster-bg">Desastre</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Inicio;
