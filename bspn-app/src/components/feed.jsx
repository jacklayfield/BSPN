import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styling/body.css";
import { Article } from "../components/article";

export function Feed() {
  return (
    <div id="flex" className="container">
      <div className="flex-grid">
        <div className="second-third">Thing one</div>
        <div className="first-third">
          <Article />
        </div>
        <div className="third-third">Thing 3</div>
      </div>
    </div>
  );
}
