import React, { useState } from "react";
import { Jumbotron as BSJumbotron, Container, Row, Col } from "react-bootstrap";

export default function Jumbotron() {
  const [isLogged, setIsLogged] = useState(false);

  const [event, setEvent] = useState({
    round: 17,
    city: "Las Vegas",
    venue: "Sam Boyd Stadium",
    date: "May 27, 2018"
  });

  return (
    <BSJumbotron fluid>
      <Container>
        <Row className="align-items-center">
          <Col>
            <p>Next Round:</p>
            <h1>{event.city}</h1>
            <h2>{event.venue}</h2>
          </Col>
          <Col>
            <h2>Countdown 3d:5h:51m:9s</h2>
          </Col>
        </Row>
      </Container>
    </BSJumbotron>
  );
}
