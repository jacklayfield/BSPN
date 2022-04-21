import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export function PlayerForm() {
  var the_sport = sessionStorage.getItem("sport");
  const [name, setName] = useState("");
  const [number, setNum] = useState("");
  const [position, setPos] = useState("");

  var cur_url = window.location.href;

  const onSubmit = async (event) => {
    event.preventDefault();
    const newPlayer = {
      sport: the_sport,
      name,
      number,
      position,
    };
    try {
      const res = await axios.post("/rosters", newPlayer);
      window.location.replace(cur_url);
    } catch (error) {
      console.log("error with posting");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <h3>New Player</h3>
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          id="name inputdefault"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">Number</label>
        <input
          className="form-control"
          id="number inputdefault"
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="position">Position</label>
        <input
          className="form-control"
          id="position inputdefault"
          onChange={(e) => setPos(e.target.value)}
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
export default PlayerForm;
