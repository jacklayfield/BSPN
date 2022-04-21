import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { NavBar } from "../../components/navBar";
import { SportsPage } from "../../misc/sportsPageLayout";

export function BVSoccer() {
  return (
    <div>
      <body>
        <SportsPage sportname={"Boys Varsity Soccer"} />
      </body>
    </div>
  );
}
