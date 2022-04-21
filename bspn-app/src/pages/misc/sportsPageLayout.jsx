import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
// import Articles from "../../components/articles";
import { Line } from "../../components/line";
import { Schedule } from "../../components/schedule";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Articles from "../../components/articles";
import { Score } from "../../components/score";
import { Player } from "../../components/player";
import { Broadcast } from "../../components/broadcast";
import { Context } from "../../context/context";
import Button from "react-bootstrap/Button";
import "../../styling/sportsPageLayout.css";
import { Container } from "../../components/popupContainer";
import "../../App.css";

export function SportsPage({ sportname }) {
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [loadingScores, setLoadingScores] = useState(true);
  const [loadingPlayers, setLoadingPlayers] = useState(true);
  const [articles, setArticles] = useState([]);
  const [scores, setScores] = useState([]);
  const [players, setPlayers] = useState([]);
  const { user } = useContext(Context);

  //event.preventDefault(event);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoadingArticles(true);
      try {
        const res = await axios.get("/articles/sport=" + sportname);
        console.log(res);
        setArticles(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoadingArticles(false);
    };
    const fetchScores = async () => {
      setLoadingScores(true);
      try {
        const res = await axios.get("/scores/sport=" + sportname);

        setScores(res.data);
        if (sportname.length === 0) {
          const res1 = await axios.get("/scores");

          setScores(res1.data);
        }
      } catch (error) {
        console.log(error);
      }
      setLoadingScores(false);
    };
    const fetchPlayers = async () => {
      setLoadingPlayers(true);
      try {
        const res = await axios.get("/rosters/sport=" + sportname);
        setPlayers(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoadingPlayers(false);
    };

    fetchArticles();
    fetchScores();
    fetchPlayers();
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
      {loadingArticles && loadingScores && loadingPlayers && (
        <div>
          <i class="fa-solid fa-spinner fa-2x"></i>
        </div>
      )}
      {!loadingArticles && !loadingScores && !loadingPlayers && (
        <div>
          <h1 className="web-title">{sportname}</h1>
          <Row className="gx-0">
            <Col style={{ paddingLeft: 24, paddingRight: 24 }}>
              {user != null && (
                <div
                  style={{
                    padding: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Container triggerText="Upload Game" />
                </div>
              )}
              <Schedule scores={scores} />
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
              {user != null && (
                <div
                  style={{
                    padding: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Container triggerText="Upload Player" />
                </div>
              )}
              <Player players={players} />
              {/* /* <Broadcast /> */}
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}
