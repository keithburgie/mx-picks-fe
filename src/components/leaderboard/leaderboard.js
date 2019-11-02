import React, { useState, useEffect } from "react";
import Section from "../section";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import TableHead from "./leaderboardHead";
import UserRow from "./leaderboardRow";
import "./leaderboard.scss";

export default function Leaderboard({ loggedIn }) {
  const [users, setUsers] = useState({});

  const headers = [
    {
      name: "Username"
    },
    {
      name: "Points"
    },
    {
      name: "CP",
      tooltip: "Correct Picks",
      points: 7
    },
    {
      name: "1",
      tooltip: "Off By 1",
      points: 4
    },
    {
      name: "2",
      tooltip: "Off By 2",
      points: 2
    },
    {
      name: "3",
      tooltip: "Off By 3",
      points: 1
    },
    {
      name: "H",
      tooltip: "Holeshot",
      points: 3
    },
    {
      name: "M",
      tooltip: "Missed Picks",
      points: 0
    }
  ];

  const names = [
    "Keith",
    "Brandon",
    "Paul",
    "Travis",
    "Brendan",
    "Ana",
    "Tyler",
    "Elliot",
    "Elijah",
    "Jedidiah",
    "Matt",
    "Ellen"
  ];

  const createUser = name => {
    const genRandPts = () => Math.floor(Math.random() * 10);

    const user = {};
    user.name = name;
    user.correctPicks = genRandPts();
    user.off1 = genRandPts();
    user.off2 = genRandPts();
    user.off3 = genRandPts();
    user.holeshots = genRandPts();
    user.missedPicks = genRandPts();

    user.points =
      user.correctPicks * 7 +
      user.off1 * 4 * (user.off2 * 2) +
      user.off3 * 1 +
      user.holeshots * 3;

    return user;
  };

  const randomizeUsers = () => {
    let users = [];
    names.map(name => users.push(createUser(name)));
    users.sort((a, b) => {
      return (
        // sort by points
        a.points < b.points
          ? 1
          : a.points === b.points
          ? // sort by correctPicks if points are tied
            a.correctPicks < b.correctPicks
            ? 1
            : -1
          : -1
      );
    });
    setUsers(users);
  };

  const handleChange = () => {
    randomizeUsers();
  };

  useEffect(() => {
    randomizeUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <Section className="leaderboard">
      <Container fluid>
        <Row className="align-items-center">
          <Col>
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control size="lg" as="select" onChange={handleChange}>
                  <option>World League</option>
                  <option>Country League</option>
                  <option>State League</option>
                  <option>Public League 1</option>
                  <option>Public League 2</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col className="text-right">
            <Form.Group>
              <Button variant="info" size="lg" type="button">
                Join League
              </Button>
              {loggedIn && (
                <Button variant="danger" size="lg" type="button">
                  Create League
                </Button>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Table striped bordered hover variant="dark">
          <TableHead headers={headers} />
          <tbody>
            {users.length &&
              users.map((user, index) => (
                <UserRow key={index} user={user} rank={index + 1} />
              ))}
          </tbody>
        </Table>
      </Container>
    </Section>
  );
}
