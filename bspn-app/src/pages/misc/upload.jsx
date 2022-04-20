import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
// import { NavBar } from "../../components/navBar";

export function Upload() {
  var the_sport = sessionStorage.getItem("sport");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [sport, setSport] = useState(the_sport);
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      description,
      author,
      sport,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.picture = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log("error with upload");
      }
    }
    try {
      const res = await axios.post("/articles", newPost);
      window.location.replace("/" + the_sport);
    } catch (error) {
      console.log("error with posting");
    }
  };

  // setSport(the_sport);

  return (
    <div>
      <div class="m-5">
        <h1>Upload Article</h1>
      </div>

      <body>
        {file && <img src={URL.createObjectURL(file)} alt="" />}
        <form id="newtask" role="form" onSubmit={handleSubmit}>
          <div class="modal-body">
            <div class="form-group">
              <label htmlFor="fileInput">
                <i class="fa-solid fa-circle-plus fa-3x"></i>
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <p>Add image</p>
            </div>
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="Title your article"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="author">Author</label>
              <input
                type="text"
                class="form-control"
                id="author"
                placeholder="Enter your name"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="sport">Sport</label>
              <select
                class="form-select"
                onChange={(e) => setSport(e.target.value)}
              >
                <option>{the_sport}</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            {/* <div class="form-group">
              <label for="date">
                <span class="glyphicon glyphicon-calendar"></span> Date
              </label>
              <input
                type="text"
                class="form-control"
                id="date"
                placeholder="mm/dd/yyyy"
              />
            </div> */}
            <div class="form-group">
              <label for="task-note">
                <span class="glyphicon glyphicon-pencil"></span> Content
              </label>
              <textarea
                class="form-control"
                rows="7"
                id="content"
                placeholder="Enter your article."
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-success btn-default pull-left">
              <span class="glyphicon glyphicon-off"></span> Upload
            </button>
          </div>
        </form>
      </body>
    </div>
  );
}
