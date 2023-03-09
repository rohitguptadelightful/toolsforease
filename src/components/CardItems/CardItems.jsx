import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import {MdOpenInNew} from "react-icons/md";

function CardItems(props) {
  return (
    <Col xs={12} sm={6} md={6} lg={4} xl={3}>
      <Card className="mt-4 hoverEffect" onClick={()=>{window.open(props.url, '_blank');}}>
        <Card.Body className="p-2">
          <Container className="p-2 d-flex justify-content-between">
            <img src={props.image} alt="App logo" style={{ width: "35px", height: "35px" }}/>
            <MdOpenInNew/>
          </Container>
          <Container className="p-2">
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.discription}</Card.Text>
          </Container>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardItems;