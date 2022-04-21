import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { NavBar } from "../../components/navBar";
import { SportsPage } from "../misc/sportsPageLayout";

export function Soccer() {
  return (
    <div>
      <body>
        <SportsPage sportname={"Soccer"} />
      </body>
    </div>
  );
}
