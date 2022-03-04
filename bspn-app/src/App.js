import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLayout from "../src/PageLayout";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>BSPN</h2>
        <h3>Radford City Sports</h3>
        <PageLayout></PageLayout>
      </div>
    );
  }
}

export default App;
