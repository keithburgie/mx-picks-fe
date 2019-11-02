import React from "react";
import Section from "../../components/section";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "../../components/jumbotron";
import Leaderboard from "../../components/leaderboard";

export default function Home({ loggedIn }) {
  return (
    <>
      <Jumbotron loggedIn={loggedIn} />
      <Leaderboard loggedIn={loggedIn} />
      <ContentBox />
    </>
  );
}

const ContentBox = () => {
  return (
    <Section className="testing">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>How It Works</h2>
            <p className="lead">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </Col>
          <Col md={6}>
            <div className="embed-container">
              <iframe
                title="video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/G1XBb7kJJWg?controls=0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
