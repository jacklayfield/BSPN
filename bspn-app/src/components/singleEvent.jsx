import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../context/context";

const del = async (event, score) => {
  try {
    const res = await axios.delete("/scores", score.id);
    window.location.replace("/" + score.sport);
  } catch (error) {
    console.log("error with posting");
  }
}

export default function SingleEvent({ score }) {
  const { user } = useContext(Context);
  return (
    <tr>
      <td class="text-center">{score.date}</td>
      <td class="text-center">{score.time}</td>
      <td class="text-center">{score.team2}</td>
      <td class="text-center">
        {score.score1}-{score.score2}
      </td>
      <td class="text-center">
      {user != null && <button className="btn btn-danger btn-sm" type="submit" onClick={async function() {
          try {
            const res = await axios.delete("scores/" + score._id);
            window.location.replace("/" + score.sport);
          } catch (error) {
            console.log("error with posting");
          }
        }}>
          <i class="fa-solid fa-trash-can"></i>
        </button>
}
      </td>
    </tr>
  );
}
