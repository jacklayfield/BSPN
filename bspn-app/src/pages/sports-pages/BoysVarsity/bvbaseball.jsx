import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { NavBar } from "../../components/navBar";
import { SportsPage } from "../../misc/sportsPageLayout";

export function BVBaseball() {
  return (
    <div>
      <body>
        <SportsPage sportname={"Boys Varsity Baseball"} />
      </body>
    </div>
  );
}
