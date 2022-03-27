/**import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Container, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServicoSocial = () => {
  return (
    <>
      <br />

      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Card style={{ width: "18rem" }}>
              <ListGroup action variant="Primary">
                <Link className="btn " to="/servicosocial/detalhes">
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
        </Row>
      </Container>
    </>
  );
};

export default ServicoSocial;
*/
