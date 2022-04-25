import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Form() {
  var the_sport = sessionStorage.getItem("sport") ;
  const [team2, setTeam2] = useState("");
  const [score1, setScore1] = useState("");
  const [score2, setScore2] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");



  var cur_url = window.location.href;
  // var sport_route = cur_url.split("/")[1];

  const onSubmit = async (event) => {
    event.preventDefault();
    const newScore = {
      sport: the_sport,
      team1: "Radford HS",
      team2,
      score1,
      score2,
      date,
      time,
    };
    try {
      const res = await axios.post("/scores", newScore);
      window.location.replace(cur_url);
    } catch (error) {
      console.log("error with posting");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <h3>New Game</h3>
      </div>
      <div className="form-group">
        <label htmlFor="opponent">Opponent</label>
        <input
          className="form-control"
          id="opponent inputdefault"
          onChange={(e) => setTeam2(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <DatePicker selected={date}  onChange={(value, e) => setDate(value)} className="form-control"   id="date inputdefault"/>
        
      </div>
      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input
          className="form-control"
          id="time inputdefault"
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="homeScore">Bobcat's Score</label>
        <input
          className="form-control"
          id="homeScore inputdefault"
          onChange={(e) => setScore1(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="oppScore">Opponent's Score</label>
        <input
          className="form-control"
          id="oppScore inputdefault"
          onChange={(e) => setScore2(e.target.value)}
        />
      </div>
      <div className="form-group" style={{ padding: 10 }}>
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
