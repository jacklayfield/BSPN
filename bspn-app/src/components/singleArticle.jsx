import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import "../styling/body.css";
import "../styling/article.css";

export default function SingleArticle() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/articles/id=" + path);
        setArticle(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchArticle();
  }, []);
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
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
      )}
    </div>
  );
}
