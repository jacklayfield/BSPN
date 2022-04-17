import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
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
import { Context } from "../../context/context";
import Button from "react-bootstrap/Button";
import "../../styling/sportsPageLayout.css";

export function SportsPage({ sportname }) {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const { user } = useContext(Context);

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

  sessionStorage.setItem("sport", sportname);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "rgb(227, 227, 227)",
      }}
    >
      {loading && (
        <div>
          <i class="fa-solid fa-spinner fa-2x"></i>
        </div>
      )}
      {!loading && (
        <div>
          <h1 className="web-title">{sportname}</h1>
          <Row className="gx-0">
            <Col style={{ paddingLeft: 24, paddingRight: 24 }}>
              <Score sport={sportname} />
            </Col>
            <Col xs={5}>
              {user != null && (
                <div
                  style={{
                    padding: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: "#daa520",
                      borderColor: "#daa520",
                      color: "black",
                      fontWeight: 600,
                      fontSize: "1.5rem",
                    }}
                    href="/upload"
                  >
                    Upload Article
                  </Button>
                </div>
              )}
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
