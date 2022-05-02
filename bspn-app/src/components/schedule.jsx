import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleEvent from "./singleEvent";

export function Schedule({ scores }) {
  //   const fetchScores = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await axios.get("/scores/sport=" + sport);

  //       setScores(res.data);
  //       if (sport.length === 0) {
  //         const res1 = await axios.get("/scores");

  //         setScores(res1.data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       const res1 = await axios.get("/scores");

  //       setScores(res1.data);
  //     }
  //     setLoading(false);
  //   };
  //   fetchScores();
  // }, []);
  // sessionStorage.setItem("sport", sport);
  // if (scores.length !== 0) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "15px",
        border: "5px solid",
        boxShadow: "5px 5px 5px #a0a0a0",
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
    </div>
  );
  // } else {
  //   return (
  //     <div
  //       style={{
  //         backgroundColor: "white",
  //         borderRadius: "25px",
  //         border: "5px solid",
  //       }}
  //     >
  //       <h2
  //         style={{
  //           textAlign: "Left",
  //           fontSize: 25,
  //           position: "relative",
  //           left: "20px",
  //           bottom: "-5px",
  //           fontWeight: "bold",
  //         }}
  //       >
  //         Schedule
  //       </h2>
  //       <table id="tasks" class="table table-hover">
  //         <thead>
  //           <tr>
  //             <th class="text-center">Date</th>
  //             <th class="text-center">Time</th>
  //             <th class="text-center">Opponent</th>
  //             <th class="text-center">Score</th>
  //           </tr>
  //         </thead>
  //         <tbody></tbody>
  //       </table>
  //     </div>
  //   );
  // }
}
