import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                        
                          <tr >
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
