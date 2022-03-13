import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { NavBar } from "../components/navBar";

export function Home() {
  return (
    <div>
      <NavBar />
      <h1>Bobcat Sports Home</h1>
    </div>
  );
}
