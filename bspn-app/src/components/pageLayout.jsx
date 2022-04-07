import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";
import { Feed } from "../components/feed";

export function PageLayout({ children }) {
  return (
    <div style={{ height:"100%", background: "rgb(227, 227, 227)", color: "#DAA520" }}>
      <NavBar />
      <div style={{ height: "100%", background: "rgb(227, 227, 227)", paddingBottom: 92 }}>{children}</div>
      <Footer />
    </div>
  );
}
