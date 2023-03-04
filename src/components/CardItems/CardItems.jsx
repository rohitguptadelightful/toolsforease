import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Button, Container } from "react-bootstrap";

function CardItems(props) {
  return (
    <Col xs={12} sm={6} md={6} lg={4} xl={3}>
      <Card className="mt-4">
        <Card.Body className="p-2">
          <Container className="p-2">
            <img src={props.image} alt="App logo" style={{ width: "35px", height: "35px" }}/>
          </Container>
          <Container className="p-2">
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.discription}</Card.Text>
          </Container>
          <Container className="p-2">
            <Button variant="primary">Go To App</Button>
          </Container>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardItems;