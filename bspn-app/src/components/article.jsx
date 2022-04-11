import React from "react";
import "../styling/body.css";
import "../styling/article.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Article({ article }) {
  const image_path = "http://localhost:4000/images/";
  return (
    <div className="main-body">
      {article.picture && (
        <img className="postImg" src={image_path + article.picture} alt="" />
      )}
      <Link to={`/article/${article._id}`}>
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
