import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Feed } from "../components/feed";
import { NavBar } from "../components/navBar";

export function Home() {
  return (
    <div>
      <div class="m-5">
        <h1>Bobcat Sports Home</h1>
      </div>
      <body>
        <Feed />
      </body>
    </div>
  );
}
