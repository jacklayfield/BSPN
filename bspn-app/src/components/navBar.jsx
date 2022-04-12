import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { React, useRef } from "react";
import "../styling/nav.css";
import { Context } from "../context/context";
import { useContext } from "react";
// import { Upload } from "../pages/misc/upload";
// import { Login } from "../pages/misc/login";

export function NavBar() {
  // const nRef = useRef();

  // const switchNav = () => {
  //   nRef.current.classList.toggle("responsive_nav");
  // };

  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav
      className="navbar navbar-expand-sm navbar-light navbar-fixed-top"
      id="stickyNavbar"
    >
      <a className="navbar-brand mb-0 h1" href="/">
        <img
          className="d-inline-block align-top"
          src="https://i.postimg.cc/tJ2mbWqY/205151241-1728263054037111-4601375418838296056-n-removebg-preview.png"
          height="30"
          width="35"
        />
        Bobcat Sports
      </a>
      <button
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        className="navbar-toggler"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a style={{ fontWeight: "bold" }} className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a
              style={{
                fontWeight: "bold",
              }}
              className="nav-link"
              href="/schedule"
            >
              Schedule
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              href="/"
              style={{ fontWeight: "bold" }}
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Football
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a href="/football" className="dropdown-item">
                  Boys Varsity
                </a>
              </li>

              <li>
                <a href="/football" className="dropdown-item">
                  Boys JV
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              href="/"
              style={{ fontWeight: "bold" }}
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Basketball
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a href="/basketball" className="dropdown-item">
                  Boys Varsity
                </a>
              </li>
              <li>
                <a href="/basketball" className="dropdown-item">
                  Girls Varisity
                </a>
              </li>
              <li>
                <a href="/basketball" className="dropdown-item">
                  Boys JV
                </a>
              </li>
              <li>
                <a href="/basketball" className="dropdown-item">
                  Girls JV
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              href="/"
              style={{ fontWeight: "bold" }}
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Baseball
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a href="/baseball" className="dropdown-item">
                  Boys Varsity
                </a>
              </li>

              <li>
                <a href="/baseball" className="dropdown-item">
                  Boys JV
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item active">
            <a
              style={{
                fontWeight: "bold",
              }}
              className="nav-link"
              href="/"
            >
              All Sports
            </a>
          </li>
          <li onClick={handleLogout}>{user && "Logout"}</li>
        </ul>
      </div>
      <a className="admin nav-link" id="login" href={"/login"}>
        Log In
      </a>
      <a className="admin nav-link" id="upload" href={"/upload"}>
        Upload
      </a>
    </nav>

    //{/*
    //<nav ref={nRef}>
    //<a href="/">Home</a>
    //<a href="/hockey">Hockey</a>
    //<a href="/football">Football</a>
    //<button className="nav-btn nav-close-btn" onClick={switchNav}>
    //<FaTimes />
    //</button>
    //</nav>

    //<button className="nav-btn" onClick={switchNav}>
    //<FaBars />
    //</button>
    //</header> */}
  );
}
