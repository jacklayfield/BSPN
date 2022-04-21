import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Line } from "./line";
import { useContext } from "react";
import { Context } from "../context/context";

export function Player({ players }) {
  // const [loading, setLoading] = useState(true);
  // const [players, setPlayers] = useState([]);
  var cur_url = window.location.href;

  const { user } = useContext(Context);

  // useEffect(() => {
  //   const fetchPlayers = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await axios.get("/rosters/sport=" + sport);
  //       setPlayers(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false);
  //   };
  //   fetchPlayers();
  // }, []);
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

              {user != null && (
                <li class="list-inline-item">
                  <button
                    className="btn btn-danger btn-sm"
                    type="submit"
                    onClick={async function () {
                      try {
                        const res = await axios.delete("rosters/" + a._id);
                        window.location.replace(cur_url);
                      } catch (error) {
                        console.log("error with posting");
                      }
                    }}
                  >
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </li>
              )}
            </ul>
          </h5>
        </div>
      ))}
    </div>
  );
}
