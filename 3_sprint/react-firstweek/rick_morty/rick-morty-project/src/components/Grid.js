import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card2 from "./Card2";

function Grid() {
  return (
    <Container>
      <Row>
        <Col>
          <Card2 />
        </Col>
        <Col>
          <Card2 />
        </Col>
      </Row>
    </Container>
  );
}

export default Grid;
