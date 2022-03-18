import React from "react";
import { Card, Col } from "react-bootstrap";

const Box = (props) => {
  const variant = props.variant ? props.variant : "info";

  return (
    <>
      <br />
      <Col md={3}>
        <Card border={variant} className="mb-3">
          <Card.Header>{props.title}</Card.Header>
          <Card.Body>{props.children}</Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Box;
