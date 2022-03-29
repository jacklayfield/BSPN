import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Hockey } from "./pages/hockey";
import Home from "./pages/home";
import { Football } from "./pages/football";
import { Upload } from "./pages/upload";
import { Login } from "./pages/login";
import { PageLayout } from "./components/pageLayout";

ReactDOM.render(
  <Router>
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hockey" element={<Hockey />} />
        <Route path="/football" element={<Football />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </PageLayout>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
