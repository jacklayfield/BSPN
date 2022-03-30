import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";
import { Feed } from "../components/feed";
import "../styling/body.css";

export function PageLayout({ children }) {
  return (
    <div style={{ background: "#e3e3e3", color: "#DAA520" }}>
      <NavBar />
      <div style={{ height: "100%", paddingBottom: 92 }}>{children}</div>
      <Footer />
    </div>
  );
}
