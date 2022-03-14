import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";

export function PageLayout({ children }) {
  return (
    <div style={{ background: "#f9f9f9" }}>
      <NavBar />
      <div class="m-5">{children}</div>
      <Footer />
    </div>
  );
}
