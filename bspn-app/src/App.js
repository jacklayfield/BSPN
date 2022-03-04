import React, { Component } from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLayout from "./components/pageLayout";
import Hockey from "./pages/hockey";
import NavBar from "./components/navBar";

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <h2>BSPN</h2>
        <h3>Radford City Sports</h3>
        <PageLayout></PageLayout>
      </div>
    );
  }
}

export default App;
