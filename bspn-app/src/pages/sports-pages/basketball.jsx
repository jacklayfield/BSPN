import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { NavBar } from "../../components/navBar";
import { SportsPage } from "../misc/sportsPageLayout";

export function Basketball() {
  return (
    <div>
      <div>
        <h2>Basketball</h2>
      </div>

      <body>
        <SportsPage sportname={"basketball"}/>
      </body>
    </div>
  );
}
