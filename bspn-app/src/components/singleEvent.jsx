import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function SingleEvent({ score }) {
  return (
    <tr>
      <td class="text-center">{score.date}</td>
      <td class="text-center">{score.time}</td>
      <td class="text-center">{score.team2}</td>
      <td class="text-center">
        {score.score1}-{score.score2}
      </td>
    </tr>
  );
}
