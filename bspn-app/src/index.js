import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Hockey } from "./pages/sports-pages/hockey";
import Home from "./pages/misc/home";
import { Football } from "./pages/sports-pages/football";
import { Basketball } from "./pages/sports-pages/basketball";
import { Baseball } from "./pages/sports-pages/baseball";
import { Upload } from "./pages/misc/upload";
import { Login } from "./pages/misc/login";
import { PageLayout } from "./components/pageLayout";
import ArticlePage from "./pages/misc/articlePage";

ReactDOM.render(
  <Router>
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hockey" element={<Hockey />} />
        <Route path="/football" element={<Football />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="/baseball" element={<Baseball />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
      </Routes>
    </PageLayout>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
