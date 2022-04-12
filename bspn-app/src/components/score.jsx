import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div>
        {scores.map((a) => (
          <div class="grid-item" id="score">
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


  return (
    <div class="grid-item" id="score">
      
    </div>
  );
}
