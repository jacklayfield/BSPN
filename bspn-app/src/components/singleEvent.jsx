import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";

export function SingleEvent() {
  return (
    <tr>
      <td class="text-center">event.date</td>
      <td class="text-center">event.time</td>
      <td class="text-center">event.opponent</td>
      <td class="text-center">event.score</td>
    </tr>
  );
}
