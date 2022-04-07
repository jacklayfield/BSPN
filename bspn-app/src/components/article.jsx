import React from "react";
import "../styling/body.css";
import "../styling/article.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Article({ article }) {
  return (
    <div className="main-body">
      <Link to={`/post/${article._id}`}>
      <span className="postTitle">{article.title}</span>
      </Link>
      <div id="article-content">
        <ul className="list-inline">
          <li className="list-inline-item">By: {article.author}</li>
          <li className="list-inline-item">Date: ex</li>
        </ul>
        <p className="postDesc">{article.description}</p>
      </div>
    </div>
  );
}
