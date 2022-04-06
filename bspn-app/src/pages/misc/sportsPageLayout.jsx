import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import Articles from "../../components/articles";
import { Feed } from "../../components/feed";
import { Line } from "../../components/line";

export function SportsPage({ sportname }) {
  return (
    <div>
      <h2>{sportname}</h2>
      <Line />
      <div id="flex" className="row">
        <div className="second-third">
          <div id="score-bar">
            <h2>Recent Scores</h2>
            <div class="grid-container"></div>
          </div>
        </div>
        <div className="first-third">
          <h2>Articles</h2>
        </div>
        <div className="third-third video">
          <h2>Latest Broadcasts</h2>
          <div class="grid-container"></div>
        </div>
      </div>
      <Line />
    </div>
  );
}
