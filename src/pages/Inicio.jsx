import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, Col, ListGroup, Row } from "react-bootstrap";

const Inicio = () => {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Header>Balcão</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Inicio;
