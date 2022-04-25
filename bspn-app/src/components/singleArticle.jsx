import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import "../styling/body.css";
import "../styling/article.css";
import { Line } from "./line";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { Context } from "../context/context";

export default function SingleArticle() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);
  const image_path = "http://localhost:4000/images/";
  const { user } = useContext(Context);

  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  var cur_url = window.location.href;

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/articles/id=" + path);
        setArticle(res.data);
        setTitle(res.data.title);
        setDescription(res.data.description);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchArticle();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`/articles/${article._id}`);
      window.location.replace("/");
    } catch (error) {
      console.log("could not delete");
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(`/articles/${article._id}`, {
        title,
        description,
      });
      window.location.replace(cur_url);
      // setUpdateMode(false);
    } catch (error) {}
  };

  const handleCancel = async () => {
    setEditMode(false);
  };

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
                {editMode ? (
                  <div class="form-group">
                    <label for="title">Title</label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                ) : (
                  <div>
                    <h2 className="articleTitleSingle" style={{ padding: 5 }}>
                      {article.title}
                    </h2>
                    {user != null && (
                      <div>
                        <Row>
                          <Col style={{ paddingLeft: 20 }} xs="auto">
                            <button
                              className="btn btn-danger btn-sm"
                              type="submit"
                            >
                              <i
                                onClick={handleDelete}
                                class="fa-solid fa-trash-can fa-2x"
                              ></i>{" "}
                            </button>
                          </Col>
                          <Col style={{ paddingLeft: 0 }} xs="auto">
                            <button
                              className="btn btn-primary btn-sm"
                              type="submit"
                            >
                              <i
                                onClick={() => setEditMode(true)}
                                class="fa-solid fa-pen-to-square fa-2x"
                              ></i>
                            </button>
                          </Col>
                        </Row>
                      </div>
                    )}{" "}
                  </div>
                )}
                <div id="article-content">
                  <div className="infoRow">
                    <div className="inlineL">{article.author}</div>
                    <div className="inlineR">
                      {new Date(article.createdAt).toDateString()}
                    </div>
                  </div>
                  <Line />
                  {editMode ? (
                    <div class="form-group">
                      <label for="task-note">
                        <span class="glyphicon glyphicon-pencil"></span> Content
                      </label>
                      <textarea
                        class="form-control"
                        rows="15"
                        id="content"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  ) : (
                    <p className="paragraph-text">{article.description}</p>
                  )}
                  {editMode && (
                    <div style={{ paddingTop: 10 }}>
                      <Row>
                        <Col style={{ paddingLeft: 20 }} xs="auto">
                          <button
                            type="submit"
                            class="btn btn-success btn-default pull-left"
                            onClick={handleSave}
                          >
                            <span class="glyphicon glyphicon-off"></span> Save
                            Changes
                          </button>{" "}
                        </Col>
                        <Col style={{ paddingLeft: 1 }} xs="auto">
                          <button
                            type="submit"
                            class="btn btn-danger btn-default pull-right"
                            onClick={handleCancel}
                          >
                            <span class="glyphicon glyphicon-off"></span> Cancel
                          </button>
                        </Col>
                      </Row>
                    </div>
                  )}
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
