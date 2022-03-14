import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { React, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styling/nav.css";

export function NavBar() {
  const nRef = useRef();

  const switchNav = () => {
    nRef.current.classList.toggle("responsive_nav");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light navbar-fixed-top">
      <a className="navbar-brand mb-0 h1" href="/">
        <img
          className="d-inline-block align-top"
          src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/205151241_1728263054037111_4601375418838296056_n.png?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=UmFUJ6eqiZgAX_GNTX0&tn=DTP7hXUjHTBjrbMB&_nc_ht=scontent-iad3-1.xx&oh=00_AT9M1eRlwP2ngp4edjA-a7HJ8KB9zWyNTOKO2JaOlGzUvw&oe=6248D6AA"
          height="30"
          width="30"
        />
        Bobccat Sports
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
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/football">
              Football
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/hockey">
              Hockey
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              href="/"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a href="/" className="dropdown-item">
                  Feature 1
                </a>
              </li>
              <li>
                <a href="/" className="dropdown-item">
                  Feature 2
                </a>
              </li>
              <li>
                <a href="/" className="dropdown-item">
                  Feature 3
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
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
