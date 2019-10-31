import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    setLoggedIn(!loggedIn)
  }

  return (
    <>
      <Header loggedIn={loggedIn} handleLogin={handleLogin} />
      <Home loggedIn={loggedIn} />
      <Footer />
    </>
  );
}
