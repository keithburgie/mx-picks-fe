import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./views/home";

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    setLoggedIn(!loggedIn)
  }

  return (
    <>
      <Navbar loggedIn={loggedIn} handleLogin={handleLogin} />
      <Home loggedIn={loggedIn} />
      <Footer />
    </>
  );
}
