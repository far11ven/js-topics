import React from "react";
import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  );
}

export default App;
