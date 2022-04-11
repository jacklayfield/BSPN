import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";

export function Schedule() {
  return (
    <body>
      <div id="table-container">
        <table id="tasks" class="table table-hover">
          <thead>
            <tr>
              <th class="text-center">Date</th>
              <th class="text-center">Time</th>
              <th class="text-center">Opponent</th>
              <th class="text-center">Score</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </body>
  );
}
