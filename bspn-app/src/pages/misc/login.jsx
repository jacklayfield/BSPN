import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useContext, useRef } from "react";
import { Context } from "../../context/context";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { NavBar } from "../../components/navBar";

export function Login() {
  const user_reference = useRef();
  const password_reference = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (obj) => {
    obj.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: user_reference.current.value,
        password: password_reference.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location.replace("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(user);
  return (
    <div>
      <div>
        <h1 className="web-title">Admin Login</h1>
      </div>
      <Row>
        <Col></Col>
        <Col className="m-4">
          <div>
            <body
              style={{
                borderRadius: 10,
              }}
            >
              <form id="newtask" role="form" onSubmit={handleSubmit}>
                <div class="modal-body">
                  <div class="form-group">
                    <label for="Username">Username</label>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      placeholder="Enter your username"
                      ref={user_reference}
                    />
                  </div>
                  <div class="form-group">
                    <label for="Password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Enter password"
                      ref={password_reference}
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="submit"
                    class="btn btn-success btn-default pull-left"
                    disabled={isFetching}
                  >
                    <span class="glyphicon glyphicon-off"></span> Log In
                  </button>
                </div>
              </form>
            </body>
          </div>
        </Col>
        <Col></Col>
      </Row>

      {/* <Row
        style={{
          margin: 0,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Col></Col>
        <Col xs={20}>
          <body
            style={{
              borderRadius: 10,
            }}
          >
            <form id="newtask" role="form" onSubmit={handleSubmit}>
              <div class="modal-body">
                <div class="form-group">
                  <label for="Username">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Enter your username"
                    ref={user_reference}
                  />
                </div>
                <div class="form-group">
                  <label for="Password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter password"
                    ref={password_reference}
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="submit"
                  class="btn btn-success btn-default pull-left"
                  disabled={isFetching}
                >
                  <span class="glyphicon glyphicon-off"></span> Log In
                </button>
              </div>
            </form>
          </body>
        </Col>
        <Col></Col>
      </Row> */}
    </div>
  );
}
