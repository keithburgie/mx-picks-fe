import React from "react";
import Jumbotron from "./Jumbotron";
import Leaderboard from "./Leaderboard"

export default function Home({ loggedIn }) {
  return (
    <>
      <Jumbotron loggedIn={loggedIn} />
      <Leaderboard />
    </>
  );
}
