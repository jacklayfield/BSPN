import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";
import { Feed } from "../components/feed";
import "../styling/body.css";

export function PageLayout({ children }) {
  return (
    <div style={{ background: "#000000", color: "#DAA520" }}>
      <NavBar />
      <div style={{ height: "100%" }}>{children}</div>
      <Footer />
    </div>
  );
}
