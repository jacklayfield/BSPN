import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { NavBar } from "../../components/navBar";

export function Football() {
  return (
    <div>
      <div class="m-5">
        <h2>Football</h2>
      </div>

      <body>
        <img
          src={"./football.jpg"}
          alt="Cannot display"
          style={{ height: "50%", width: "50%" }}
        />
      </body>
    </div>
  );
}
