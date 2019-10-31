import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountdownTimer from "./CountdownTimer";
import styles from "./Jumbotron.module.scss";

export default function Jumbotron({ loggedIn }) {

  const [event] = useState({
    round: 17,
    city: "Las Vegas",
    venue: "Sam Boyd Stadium",
    date: "2019-12-29T03:00-0000",
    cityBackground: "vegas.jpg",
    riderBackground: "tomac.jpg"
  });

  const cityBackground = {
    backgroundImage: `url(${event.cityBackground})`
  };

  const riderBackground = {
    backgroundImage: `url(${event.riderBackground})`
  };

  return (
    <div className={styles["jumbotron"]}>
      <div className={styles["city-background"]} style={cityBackground}></div>
      <div className={styles["slash-container"]}>
        <div className={styles["rider-background"]} style={riderBackground}></div>
      </div>
      <Container className={styles["jumbotron-container"]}>
        <Row className="align-items-center" style={{ width: "100%" }}>
          <Col>
            <h1>
              <small>Next Round:</small><br />
              {event.city} <br />
              <small>{event.venue}</small>
            </h1>
          </Col>
          <Col className={styles["right-col"]}>
            <CountdownTimer eventDate={event.date} />
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
