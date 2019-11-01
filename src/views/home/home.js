import React from "react";
import Jumbotron from "../../components/jumbotron";
import Leaderboard from "../../components/leaderboard";

export default function Home({ loggedIn }) {
  return (
    <>
      <Jumbotron loggedIn={loggedIn} />
      <Leaderboard />
    </>
  );
}
