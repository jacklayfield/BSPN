import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Line } from "./line";

export function Score({ sport }) {
  const [loading, setLoading] = useState(true);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/scores/sport=" + sport);

        setScores(res.data);
        if (sport.length === 0) {
          const res1 = await axios.get("/scores");

          setScores(res1.data);
        }
      } catch (error) {
        console.log(error);
        const res1 = await axios.get("/scores");

        setScores(res1.data);
      }
      setLoading(false);
    };
    fetchScores();
  }, []);
  if (scores.length !== 0) {
    return (
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "25px",
          border: "5px solid",
        }}
      >
        <h2
          style={{
            textAlign: "Left",
            fontSize: 25,
            position: "relative",
            left: "20px",
            bottom: "-5px",
            fontWeight: "bold",
          }}
        >
          Schedule
        </h2>
        {scores.map((a) => (
          <div class="grid-item" id="score">
            <Line />
            <h5 class="score-title">
              {a.team1} vs {a.team2}
            </h5>
            <h5 class="score-content">
              <ul class="list-inline">
                <li class="list-inline-item">{a.score1} </li>
                <li class="list-inline-item">
                  <i class="bi bi-arrow-right-short"></i>
                </li>
                <li class="list-inline-item">{a.score2}</li>
              </ul>
            </h5>
          </div>
        ))}
      </div>
    );
  }

  return <div class="grid-item" id="score"></div>;
}
