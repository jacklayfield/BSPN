import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import "../styling/body.css";
import axios from "axios";
// import Article from "../components/article";
import Articles from "../components/articles";
import { Context } from "../context/context";
import { useContext } from "react";
import Ads from "../components/ads";

export function Feed({ articles, ads }) {
  const { user } = useContext(Context);
  const [file, setFile] = useState(null);

  const half = ads.length / 2;

  const half1 = ads.slice(0, half);
  const half2 = ads.slice(half, ads.length);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAd = {};
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newAd.picture = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log("error with upload");
      }
    }
    try {
      await axios.post("/ads", newAd);
      window.location.replace("/");
    } catch (error) {
      console.log("error with posting");
    }
  };
  return (
    <div>
      <Row className="gx-0">
        <Col style={{ paddingLeft: 24, paddingRight: 24 }}>
          {user && (
            <div
              style={{
                background: "white",
                borderRadius: 5,
                marginBottom: 10,
              }}
            >
              {file && (
                <img
                  className="articleImg"
                  src={URL.createObjectURL(file)}
                  alt=""
                />
              )}
              <form id="newtask" role="form" onSubmit={handleSubmit}>
                <div style={{ paddingTop: 15 }} class="modal-body">
                  <div class="form-group">
                    <label htmlFor="fileInput">
                      <i class="fa-solid fa-circle-plus fa-3x"></i>
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <p>New Advertisement</p>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="submit"
                    class="btn btn-success btn-default pull-left"
                  >
                    <span class="glyphicon glyphicon-off"></span> Upload
                  </button>
                </div>
              </form>
            </div>
          )}
          <Ads ads={half1} />
        </Col>
        <Col xs={6}>
          <Articles articles={articles} />
        </Col>
        <Col style={{ paddingLeft: 24, paddingRight: 24 }}>
          <Ads ads={half2} />
        </Col>
      </Row>
    </div>
  );
}
