import React from "react";
import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Line } from "../components/line";

export function Broadcast() {
  return (
    <div
      class="grid-item"
      style={{
        backgroundColor: "white",
        borderRadius: "25px",
        border: "5px solid",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          textAlign: "Left",
          fontSize: 25,
          position: "relative",
          left: "20px",
          bottom: "-5px",
          fontWeight: "bold",
        }}
      >
        Latest Broadcasts
      </h2>
      <iframe src="https://www.youtube.com/embed/5qap5aO4i9A/?controls=1"></iframe>
    </div>
  );
}
