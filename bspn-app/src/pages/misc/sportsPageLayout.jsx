import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import Articles from "../../components/articles";
import { Line } from "../../components/line";
import { Schedule } from "../schedule";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Articles from "../../components/articles";
import { Score } from "../../components/score";
import { Player } from "../../components/player";
import { Broadcast } from "../../components/broadcast";
import "../../styling/sportsPageLayout.css";

export function SportsPage({ sportname }) {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  console.log(sportname);

  const sportname_capitalized =
    sportname.charAt(0).toUpperCase() + sportname.slice(1);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/articles/sport=" + sportname);
        console.log(res);
        setArticles(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchArticles();
  }, []);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "rgb(227, 227, 227)",
      }}
    >
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h1 className="web-title">{sportname_capitalized}</h1>
          <Row className="gx-0">
            <Col style={{ paddingLeft: 24, paddingRight: 24 }}>
              <Score sport={sportname} />
            </Col>
            <Col xs={5}>
              <Articles articles={articles} />
            </Col>
            <Col style={{ paddingLeft: 24, paddingRight: 24 }}>
              <Player sport={sportname} />
              {/* /* <Broadcast /> */}
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}
