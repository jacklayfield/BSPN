import React from "react";
import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function Score() {
  return (
    <div class="grid-item" id="score">
      <h5 class="score-title">RHS vs GHS</h5>
      <h5 class="score-content">
        <ul class="list-inline">
          <li class="list-inline-item">Score 1 </li>
          <li class="list-inline-item">
            <i class="bi bi-arrow-right-short"></i>
          </li>
          <li class="list-inline-item">Score 2 </li>
        </ul>
      </h5>
    </div>
  );
}
