import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import Articles from "../../components/articles";
import { Line } from "../../components/line";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Articles from "../../components/articles";
import { Score } from "../../components/score";
import { Broadcast } from "../../components/broadcast";

export function SportsPage({ sportname }) {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/posts");
        setArticles(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchArticles();
  }, []);
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          {/* <h2>{sportname}</h2>
  <Line />
  <div id="flex" className="row">
    <div className="second-third">
      <div id="score-bar">
        <h2>Recent Scores</h2>
        <div class="grid-container"></div>
      </div>
    </div>
    <div className="first-third">
      <h2>Articles</h2>
    </div>
    <div className="third-third video">
      <h2>Latest Broadcasts</h2>
      <div class="grid-container"></div>
    </div>
  </div>
  <Line /> */}
          <Row>
            <Col>
              <h2 style={{ textAlign: "center" }}>Recent Scores</h2>
              <Score sport={sportname}/>
            </Col>
            <Col>
              <h2 style={{ textAlign: "center" }}>Articles</h2>
              <Articles articles={articles} />
            </Col>
            <Col>
              <h2 style={{ textAlign: "center" }}>Latest Broadcasts</h2>
              <Broadcast />
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}
