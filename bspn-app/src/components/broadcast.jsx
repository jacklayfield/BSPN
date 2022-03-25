import React from "react";
import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function Broadcast() {
  return (
    <div class="grid-item">
      <p>Video</p>
      <iframe src="https://www.youtube.com/embed/5qap5aO4i9A/?controls=1"></iframe>
    </div>
  );
}
