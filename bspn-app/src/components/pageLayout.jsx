import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";
import { Feed } from "../components/feed";

export function PageLayout({ children }) {
  return (
    <div style={{ position: "absolute", height:"100%", background: "rgb(227, 227, 227)"}}>
      <NavBar />
      <div style={{background: "rgb(227, 227, 227)"}}>{children}</div>
      <Footer />
    </div>
  );
}
