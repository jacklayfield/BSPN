import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { NavBar } from "../../components/navBar";
import { SportsPage } from "../misc/sportsPageLayout";

export function Football() {
  return (
    <div>
      <div class="m-5">
        <h2>Football</h2>
      </div>

      <body>
        <SportsPage />
      </body>
    </div>
  );
}
