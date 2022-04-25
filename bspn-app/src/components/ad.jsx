import React from "react";
import "../styling/body.css";
import "../styling/article.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../context/context";
import { useContext } from "react";
import axios from "axios";

export default function Ad({ ad }) {
  const image_path = "http://localhost:4000/images/";
  const { user } = useContext(Context);
  var cur_url = window.location.href;

  return (
    <div>
      {ad.picture && (
        <img className="articleImg" src={image_path + ad.picture} alt="" />
      )}
      {user != null && (
        <button
          className="btn btn-danger btn-sm"
          type="submit"
          onClick={async function () {
            try {
              await axios.delete("ads/" + ad._id);
              window.location.replace(cur_url);
            } catch (error) {
              console.log("error with deleting");
            }
          }}
        >
          <i
            style={{ justifyContent: "center" }}
            class="fa-solid fa-trash-can"
          ></i>{" "}
          Delete Ad
        </button>
      )}
    </div>
  );
}
