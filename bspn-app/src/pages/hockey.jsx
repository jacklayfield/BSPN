import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { NavBar } from "../components/navBar";

export function Hockey() {
  return (
    <div>
      <div class="m-5">
        <h2>Hockey</h2>
      </div>
      <body>
        <img
          src={"./hockey.jpg"}
          alt="Cannot display"
          style={{ height: "50%", width: "50%" }}
        />
      </body>
    </div>
  );
}
