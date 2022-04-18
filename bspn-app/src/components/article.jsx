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
        <img className="articleImg" src={image_path + article.picture} alt="" />
      )}
      <Link to={`/article/${article._id}`}>
        <h2 className="articleTitle" style={{ padding: 5 }}>
          {article.title}
        </h2>
      </Link>
      <div id="article-content">
        <div className="infoRow">
          <div className="inlineL">{article.author}</div>
          <div className="inlineR">
            {new Date(article.createdAt).toDateString()}
          </div>
        </div>
        <p className="articleDesc">{article.description}</p>
      </div>
    </div>
  );
}
