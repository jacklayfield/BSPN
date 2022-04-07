import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { NavBar } from "../../components/navBar";
import { SportsPage } from "../misc/sportsPageLayout";

export function Hockey() {
  return (
    <div>
      <div class="m-5">
        <h2>Hockey</h2>
      </div>

      <body>
        <SportsPage sportname={"hockey"}/>
      </body>
    </div>
  );
}
