import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../context/context";

export default function SingleEvent({ score }) {
  var cur_url = window.location.href;
  // var sport_route = cur_url.split("/")[1];
  // console.log(cur_url);

  function scoreOutput(score) {
    if (score.score1 !== "") {
      return score.score1 + "-" + score.score2;
    } else {
      return "";
    }
  }

  // console.log(score.sport);
  const { user } = useContext(Context);
  return (
    <tr>
      <td class="text-center">{new Date(score.date).toDateString()}</td>
      <td class="text-center">{score.time}</td>
      <td class="text-center">{score.team2}</td>
      <td class="text-center">{scoreOutput(score)}</td>
      <td class="text-center">
        {user != null && (
          <button
            className="btn btn-danger btn-sm"
            type="submit"
            onClick={async function () {
              try {
                const res = await axios.delete("scores/" + score._id);
                window.location.replace(cur_url);
              } catch (error) {
                console.log("error with posting");
              }
            }}
          >
            <i class="fa-solid fa-trash-can"></i>
          </button>
        )}
      </td>
    </tr>
  );
}
