import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { NavBar } from "../../components/navBar";

export function Login() {
  return (
    <div>
      <div class="m-5">
        <h1>Log In</h1>
      </div>

      <body>
        <form id="newtask" role="form">
          <div class="modal-body">
            <div class="form-group">
              <label for="Username">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div class="form-group">
              <label for="Password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter password"
              />
            </div>
          </div>
          <div class="modal-footer">
            <a href="/login">Forgot Password</a>
            <button type="login" class="btn btn-success btn-default pull-left">
              <span class="glyphicon glyphicon-off"></span> Log In
            </button>
          </div>
        </form>
      </body>
    </div>
  );
}
