import React, { Component } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Hockey } from "./pages/hockey";
import { Football } from "./pages/football";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>BSPN</h2>
        <h3>Radford City Sports</h3>
        <Routes>
          <Route exact path="/" element={<Football />} />
          <Route path="/hockey" element={<Hockey />} />
        </Routes>
      </div>
    );
  }
}

export default App;
