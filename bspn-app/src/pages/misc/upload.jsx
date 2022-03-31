import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { NavBar } from "../../components/navBar";

export function Upload() {
  return (
    <div>
      <div class="m-5">
        <h1>Content Upload</h1>
      </div>

      <body>
        <form id="newtask" role="form">
          <div class="modal-body">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="Title your article"
              />
            </div>
            <div class="form-group">
              <label for="author">Author</label>
              <input
                type="text"
                class="form-control"
                id="author"
                placeholder="Enter your name"
              />
            </div>
            <div class="form-group">
              <label for="date">
                <span class="glyphicon glyphicon-calendar"></span> Date
              </label>
              <input
                type="text"
                class="form-control"
                id="date"
                placeholder="mm/dd/yyyy"
              />
            </div>
            <div class="form-group">
              <label for="task-note">
                <span class="glyphicon glyphicon-pencil"></span> Content
              </label>
              <textarea
                class="form-control"
                rows="7"
                id="content"
                placeholder="Enter your article."
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="upload" class="btn btn-success btn-default pull-left">
              <span class="glyphicon glyphicon-off"></span> Upload
            </button>
          </div>
        </form>
      </body>
    </div>
  );
}
