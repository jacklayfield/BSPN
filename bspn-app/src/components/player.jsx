import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Line } from "./line";

export function Player({ sport }) {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/rosters/sport=" + sport);
        setPlayers(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchPlayers();
  }, []);
  if (players.length != 0) {
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
          Roster
        </h2>

        {players.map((a) => (
          <div class="grid-item" id="score">
            <Line />
            <h5 class="score-content">
              <ul class="list-inline" id="roster">
                <li class="list-inline-item" id="number">
                  #{a.number}{" "}
                </li>
                <li class="list-inline-item">
                  <h5>{a.name}</h5>
                  <h5 id="position">{a.position}</h5>
                </li>

                <li class="list-inline-item">
                  <i class="bi bi-arrow-right-short"></i>
                </li>
              </ul>
            </h5>
          </div>
        ))}
      </div>
    );
  }
  return <div class="grid-item" id="score"></div>;
}
