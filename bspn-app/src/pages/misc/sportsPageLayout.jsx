import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import Articles from "../../components/articles";
import { Feed } from "../../components/feed";
import { Line } from "../../components/line";
import { Schedule } from "../schedule";

export function SportsPage({ sportname }) {
  return (
    <div>
      <h2>{sportname}</h2>
      <Line />
      <div id="flex" className="row">
        <div id="schedule-container" className="second-third">
          <h4>Schedule</h4>
          <Schedule />
        </div>
        <div className="first-third">
          <h4>Articles</h4>
        </div>
        <div className="third-third video">
          <h4>Roster</h4>
          <div class="grid-container"></div>
        </div>
      </div>
    </div>
  );
}
