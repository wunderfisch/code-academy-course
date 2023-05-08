import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Card2(props) {
  const charactername = props.name;
  const portrait = props.src;
  // const species = props.species;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={portrait} />
      <Card.Body>
        <Card.Title>{charactername}</Card.Title>
        {/* <Card.Text>{species}</Card.Text> */}
        {/*  <Button className="show-modal" variant="primary">
          More Info
        </Button> */}
        {/*    <div className="modal1">
          <button className="close-modal">&times;</button>
          <h3>{charactername}</h3>
          <p>Species: {species}</p>
          
        </div> */}
      </Card.Body>
    </Card>
  );
}

export default Card2;
