import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Card2(props) {
  const charactername = props.name;
  const portrait = props.src;
  const species = props.species;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={portrait} />
      <Card.Body>
        <Card.Title>{charactername}</Card.Title>
        <Card.Text>{species}</Card.Text>
        <Button class="show-modal" variant="primary">
          More Info
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Card2;
