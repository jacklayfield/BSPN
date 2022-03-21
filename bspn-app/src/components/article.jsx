import React from "react";
import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function Article() {
  return (
    <article id="article">
      <h2 id="article-title">Volleyball Game</h2>
      <div id="article-content">
        <ul className="list-inline">
          <li className="list-inline-item">By: Author </li>
          <li className="list-inline-item">Date</li>
        </ul>
        <p>sick ass volleyball game</p>
      </div>
    </article>
  );
}
