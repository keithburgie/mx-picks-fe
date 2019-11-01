import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Countdown from "./countdown";
import './jumbotron.scss'

export default function Jumbotron({ loggedIn }) {

  const [event] = useState({
    round: 17,
    city: "Las Vegas",
    venue: "Sam Boyd Stadium",
    date: "2019-12-29T03:00-0000",
    cityBackground: "images/vegas.jpg",
    riderBackground: "images/tomac.jpg"
  });

  const cityBackground = {
    backgroundImage: `url(${event.cityBackground})`
  };

  const riderBackground = {
    backgroundImage: `url(${event.riderBackground})`
  };

  return (
    <div className="jumbotron">
      <div className="has-background city-background" style={cityBackground}></div>
      <div className="slash-container">
        <div className="has-background rider-background" style={riderBackground}></div>
      </div>
      <Container fluid className="jumbotron-container">
        <Row className="align-items-center" style={{ width: "100%" }}>
          <Col md={6}>
            <h1>
              <small>Next Round:</small><br />
              {event.city} <br />
              <small>{event.venue}</small>
            </h1>
          </Col>
          <Col md={6} className="right-col">
            <Countdown eventDate={event.date} />
            {loggedIn
              ? <button className="btn btn-danger">Make Picks</button>
              : <><button className="btn btn-info">Start League</button> <button className="btn btn-info">Join League</button></>
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}
