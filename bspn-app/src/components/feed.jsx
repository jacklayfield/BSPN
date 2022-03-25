import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styling/body.css";
import { Article } from "../components/article";
import { Score } from "../components/score";
import { Broadcast } from "../components/broadcast";

export function Feed() {
  return (
    <div id="flex" className="row">
      <div className="second-third">
        <div id="score-bar">
          <h2>Recent Scores</h2>
          <div class="grid-container">
            <Score />
            <Score />
          </div>
        </div>
      </div>
      <div className="first-third">
        <Article />
      </div>
      <div className="third-third video">
        <h2>Latest Broadcasts</h2>
        <div class="grid-container">
          <Broadcast />
        </div>
      </div>
    </div>
  );
}
