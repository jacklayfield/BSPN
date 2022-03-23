import React, { Component } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";

import { Hockey } from "./pages/hockey";
import { Football } from "./pages/football";
import { Modal } from "./pages/modal";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>X</h2>
        <h3>X</h3>
        <Routes>
          <Route exact path="/" element={<Football />} />
          <Route path="/hockey" element={<Hockey />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
      </div>
    );
  }
}

export default App;
