import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Feed } from "../components/feed";
import { Line } from "../components/line";

export function Home() {
  return (
    <div>
      <div class="m-5">
        <h1>Bobcat Sports Home</h1>
      </div>
      <body id="feed-body">
        <Line />
        <Feed />
      </body>
    </div>
  );
}
