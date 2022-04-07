import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
// import { NavBar } from "../../components/navBar";

export function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  //const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      description,
      author,
    };
    //add picture handling here
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/");
    } catch (err) {
      console.log("error with posting");
    }
  };
  return (
    <div>
      <div class="m-5">
        <h1>Content Upload</h1>
      </div>

      <body>
        <form id="newtask" role="form" onSubmit={handleSubmit}>
          <div class="modal-body">
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