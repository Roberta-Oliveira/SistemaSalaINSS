import React from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FcFlashOn,
  FcHighPriority,
  FcOk,
  FcOnlineSupport,
  FcParallelTasks
} from "react-icons/fc";
import { RiFileEditLine } from "react-icons/ri";
import "./Inicio.css";

const Inicio = () => {
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
                <div class="table-overflow">
                  <Table striped bordered hover size="sm">
                    <tbody>
                      <tr>
                        <td>
                          <Link to="/balcao/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Tempo de espera 30min</td>
                        <td className="time-line-date">...</td>
                        <td className="text-danger">
                          <FcHighPriority /> Incidente
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
                        <td className="text-success">
                          <FcOk /> Resolvido
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Link to="/balcao/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Senhas prioritárias acima de 30min</td>
                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcHighPriority /> Desastre
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Link to="/balcao/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Disponibilidade do Servidor</td>
                        <td>23-03-2022</td>
                        <td className="text-success">
                          <FcParallelTasks /> 10
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Link to="/balcao/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Aguadando atendimento</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcOnlineSupport /> Desastre
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
              <Card.Header className="bg-primary text-white">PMF</Card.Header>
              <Card.Body>
                <div>
                  <Table striped bordered hover size="sm">
                    <tbody>
                      <tr>
                        <td>
                          <Link to="/pmf/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Tempo de espera 30min</td>

                        <td>23-03-2022</td>
                        <td className="text-success">
                          <FcOk /> Resolvido
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/pmf/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Atendimento mais de 30min</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcHighPriority /> Incidente
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/pmf/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Aguadando atendimento</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcOnlineSupport /> Incidente
                        </td>
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
                        <td>
                          <Link to="/servico/social/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Vagas por profissional</td>

                        <td>23-03-2022</td>
                        <td className="text-success">
                          <FcOk /> Resolvido
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/servico/social/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Tempo de espera mais de 30min</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcHighPriority /> Incidente
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/servico/social/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Atendimento a mais de uma hora</td>

                        <td>23-03-2022</td>
                        <td className="text-success">
                          <FcOk /> Resolvido
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/servico/social/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Aguadando atendimento</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcOnlineSupport /> Incidente
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <br />

          <Col md={7}>
            <Card border="primary">
              <Card.Header className="bg-primary text-white">
                Sistemas
              </Card.Header>
              <Card.Body>
                <div>
                  <Table striped bordered hover size="sm">
                    <tbody>
                      <tr>
                        <td>
                          <Link to="/sistemas/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Falhas do Assíncrono</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcHighPriority /> Incidente
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/sistemas/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Falha na Sincronização do SAT</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcHighPriority /> Incidente
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/sistemas/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Circuito Indisponível (COCAR)</td>

                        <td>23-03-2022</td>
                        <td className="text-success">
                          <FcOk /> Resolvido
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/sistemas/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Tráfego Alto</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcFlashOn /> Incidente
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/sistemas/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>
                          Capacidade em disco do servidor supererior a 90%
                        </td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcFlashOn /> Incidente
                        </td>
                      </tr>
                      <tr className="text-center">Sistemas Instáveis</tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br />

        <Row>
          <Col md={6}>
            <Card border="primary">
              <Card.Header className="bg-primary text-white">
                Agenda
              </Card.Header>
              <Card.Body>
                <div>
                  <Table striped bordered hover size="sm">
                    <tbody>
                      <tr>
                        <td>
                          <Link to="/agenda/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Insucesso Administrativo</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcHighPriority /> Incidente
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/agenda/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Insucesso Serviço Social</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcHighPriority /> Incidente
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/agenda/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Agendamento superior a 90 dias - Serv. Social</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcHighPriority /> Incidente
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/agenda/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Aguadando atendimento</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcOnlineSupport /> Incidente
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <br />

          <Col md={6}>
            <Card border="primary">
              <Card.Header className="bg-primary text-white">
                Perfil
              </Card.Header>
              <Card.Body>
                <div>
                  <Table striped bordered hover size="sm">
                    <tbody>
                      <tr>
                        <td>
                          <Link to="/perfil/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Unidade ABCD</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcHighPriority /> Incidente
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/perfil/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Homologação SISREF</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcFlashOn /> Incidente
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/perfil/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Atualização Portal COVID</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcFlashOn /> Incidente
                        </td>
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
          <Col md={6}>
            <Card border="primary">
              <Card.Header className="bg-primary text-white">
                Produtividade
              </Card.Header>
              <Card.Body>
                <div>
                  <Table striped bordered hover size="sm">
                    <tbody>
                      <tr>
                        <td>
                          <Link to="/produtividade/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Abaixo de 50% - Designados</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcHighPriority /> Incidente
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/produtividade/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Tarefas em atraso na Unidade</td>

                        <td>23-03-2022</td>
                        <td className="text-success">
                          <FcOk /> Resolvido
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/produtividade/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Agendamento superior a 90 dias - Serv. Social</td>

                        <td>23-03-2022</td>
                        <td className="text-success">
                          <FcOk /> Resolvido
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/produtividade/detalhes">
                            <RiFileEditLine title="Editar" />
                          </Link>
                        </td>
                        <td>Aguadando atendimento</td>

                        <td>23-03-2022</td>
                        <td className="text-danger">
                          <FcOnlineSupport /> Incidente
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />

        <div className="footer-copyright center">
          <div class="col s12 centralize">
            <p>
              <small class="text-muted white-text">
                ©2022 Copyright, todos os direitos reservados
              </small>
            </p>
          </div>
        </div>

        <br />
      </>
    </>
  );
};

export default Inicio;
