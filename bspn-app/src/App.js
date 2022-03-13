import React, { Component } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";

import { Hockey } from "./pages/hockey";
import { Football } from "./pages/football";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>X</h2>
        <h3>X</h3>
        <Routes>
          <Route exact path="/" element={<Football />} />
          <Route path="/hockey" element={<Hockey />} />
        </Routes>
      </div>
    );
  }
}

export default App;
