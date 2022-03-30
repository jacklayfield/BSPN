import React from "react";
import "../styling/body.css";
import "../styling/article.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Article({ article }) {
  return (
    <div className="main-body">
      <h2 id="article-title">{article.title}</h2>
      <div id="article-content">
        <ul className="list-inline">
          <li className="list-inline-item">By: {article.author}</li>
          <li className="list-inline-item">Date: Example</li>
        </ul>
        <p className="paragraph-text">{article.description}</p>
      </div>
    </div>
  );
}
