import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { NavBar } from "../components/navBar";

export function Football() {
  return (
    <div>
      <NavBar />
      <h2>Football</h2>
      <img src={"./football.jpg"} alt="Cannot display" />
    </div>
  );
}
