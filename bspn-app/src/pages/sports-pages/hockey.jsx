import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { NavBar } from "../../components/navBar";
import { SportsPage } from "../misc/sportsPageLayout";

export function Hockey() {
  return (
    <div>
      <h2>Hockey</h2>
      <body>
        <SportsPage sportname={"hockey"}/>
      </body>
    </div>
  );
}
