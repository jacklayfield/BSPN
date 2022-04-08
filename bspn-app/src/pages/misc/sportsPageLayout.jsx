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
import "../../styling/sportsPageLayout.css";

export function SportsPage({ sportname }) {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  console.log(sportname);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/posts/sport=" + sportname);
        console.log(res);
        setArticles(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchArticles();
  }, []);
  return (
    <div style={{ height: "100%", background: "rgb(227, 227, 227)" }}>
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
          <h1 className="web-title">{sportname}</h1>
          <Row>
            <Col style={{ paddingLeft: 24 }}>
              <h2 style={{ textAlign: "center" }}>Schedule</h2>
              <Score sport={sportname} />
            </Col>
            <Col xs={5}>
              <h2 style={{ textAlign: "center" }}>Articles</h2>
              <Articles articles={articles} />
            </Col>
            <Col style={{ paddingRight: 24 }}>
              <h2 style={{ textAlign: "center" }}>Roster</h2>
              <Score sport={sportname} />
              {/* <Broadcast /> */}
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}
