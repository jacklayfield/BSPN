import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleEvent from "../components/singleEvent";

export function Schedule({ sport }) {
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
  sessionStorage.setItem("sport", sport);
  if (scores.length !== 0) {
    return (
      <body>
        <table id="tasks" class="table table-hover">
          <thead>
            <tr>
              <th class="text-center">Date</th>
              <th class="text-center">Time</th>
              <th class="text-center">Opponent</th>
              <th class="text-center">Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((a) => (
              <SingleEvent score={a} />
            ))}
          </tbody>
        </table>
      </body>
    );
  } else {
    return (
      <body>
        <table id="tasks" class="table table-hover">
          <thead>
            <tr>
              <th class="text-center">Date</th>
              <th class="text-center">Time</th>
              <th class="text-center">Opponent</th>
              <th class="text-center">Score</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </body>
    );
  }
}
