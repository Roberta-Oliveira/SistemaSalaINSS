import React from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcHighPriority, FcLowPriority } from "react-icons/fc";
import { RiFileEditLine } from "react-icons/ri";

const Balcao = () => {
  return (
    <>
      <br />
      <>
        <Row>
          <Col md={7}>
            <Card border="primary">
              <Card.Header className="bg-primary text-white">
                Balcão
              </Card.Header>
              <Card.Body>
                <div>
                  <Table striped bordered hover size="sm">
                    <tbody>
                      <tr>
                        <td>
                          <Link to="/balcao/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>{" "}
                        </td>
                        <td>Tempo de espera 30min</td>
                        <td>23-03-2022</td>
                        <td className="disaster-bg">
                          <FcHighPriority /> Desastre
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Link to="/balcao/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Atendimento mais de 30min</td>
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
                </div>
              </Card.Body>
            </Card>
          </Col>

          <br />

          <Col md={5}>
            <Card border="primary">
              <Card.Header className="bg-primary text-white">
                <Link className="bg-primary text-white" to="/pmf/detalhes">
                  PMF
                </Link>
              </Card.Header>
              <Card.Body>
                <div>
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
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br />

        <Row>
          <Col md={5}>
            <Card border="primary">
              <Card.Header className="bg-primary text-white">
                Serviço Social
              </Card.Header>
              <Card.Body>
                <div>
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
                </div>
              </Card.Body>
            </Card>
          </Col>

          <br />

          <Col md={6}>
            <Card border="danger">
              <Card.Header className="bg-primary text-white">
                Sistemas
              </Card.Header>
              <Card.Body>
                <div>
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
                          <td>
                            Capacidade em disco do servidor supererior a 90%
                          </td>
                        </Link>
                        <td>23-03-2022</td>
                        <td className="disaster-bg">Desastre</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <br />

          <Col md={6}>
            <Card border="danger">
              <Card.Header className="bg-primary text-white">
                Agenda
              </Card.Header>
              <Card.Body>
                <div>
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
                </div>
              </Card.Body>
            </Card>
          </Col>

          <br />

          <Col md={6}>
            <Card border="danger">
              <Card.Header className="bg-primary text-white">
                Perfil
              </Card.Header>
              <Card.Body>
                <div>
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
                </div>
              </Card.Body>
            </Card>
          </Col>

          <br />
          <br />

          <Col md={6}>
            <Card border="danger">
              <Card.Header className="bg-primary text-white">
                Produtividade
              </Card.Header>
              <Card.Body>
                <div>
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
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    </>
  );
};

export default Balcao;
