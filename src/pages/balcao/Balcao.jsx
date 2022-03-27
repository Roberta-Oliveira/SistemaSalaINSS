import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcHighPriority, FcLowPriority, IconName } from "react-icons/fc";

import { FaRegHandPointLeft } from "react-icons/fa";

const Balcao = () => {
  return (
    <>
      <br />
      <>
        <Row>
          <Col md={5}>
            <Card border="danger">
              <Card.Header className="bg-danger text-white">
                Dados Pessoais
              </Card.Header>
              <Card.Body>
                <div>
                  <Table striped bordered hover size="sm">
                    <tbody>
                      <tr>
                        <Link
                          className="btn btn-secondary"
                          to="/balcao/detalhes"
                        >
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
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card border="danger">
              <Card.Header className="bg-danger text-white">
                Ocupações
              </Card.Header>
              <Card.Body>
                <div>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nome</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>ocupacao</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Link to="/personagens" className="btn btn-primary mt-3">
          <FaRegHandPointLeft /> Voltar
        </Link>
      </>
    </>
  );
};

export default Balcao;
