import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import "../styling/body.css";
import "../styling/article.css";
import { Line } from "./line";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SingleArticle() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const image_path = "http://localhost:4000/images/";

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
        <div>
          <h1 className="web-title">BSPN</h1>
          <Row style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Col></Col>
            <Col xs={8}>
              <div className="main-body">
                {" "}
                {article.picture && (
                  <img
                    className="articleImgSingle"
                    src={image_path + article.picture}
                    alt=""
                  />
                )}
                <h2
                  id="article-title"
                  className="articleTitleSingle"
                  style={{ padding: 5 }}
                >
                  {article.title}
                </h2>
                <div id="article-content">
                  <div className="infoRow">
                    <div className="inlineL">{article.author}</div>
                    <div className="inlineR">
                      {new Date(article.createdAt).toDateString()}
                    </div>
                  </div>
                  <Line />
                  <p className="paragraph-text">{article.description}</p>
                </div>
              </div>
            </Col>
            <Col></Col>
          </Row>
          {/* <h1 className="web-title">BSPN</h1>
          {article.picture && (
            <img
              style={{
                width: "1300px",
                position: "absolute",
                left: "250px",
                textAlign: "center",
              }}
              className="postImg"
              src={image_path + article.picture}
              alt=""
            />
          )}
          <div
            className="main-body"
            style={{
              width: "1300px",
              position: "absolute",
              left: "250px",
              textAlign: "center",
            }}
          >
            <h2 id="article-title">{article.title}</h2>
            <div id="article-content">
              <ul className="list-inline">
                <li className="list-inline-item">By: {article.author}</li>
                <li className="list-inline-item">Date: Example</li>
              </ul>
              <Line />
              <p className="paragraph-text">{article.description}</p>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
}
