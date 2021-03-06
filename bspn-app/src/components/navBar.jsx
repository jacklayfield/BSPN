import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { React, useRef } from "react";
import "../styling/nav.css";
import { Context } from "../context/context";
import { useContext } from "react";
// import { Upload } from "../pages/misc/upload";
// import { Login } from "../pages/misc/login";
import Button from "react-bootstrap/Button";

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
      style={{ paddingRight: 10 }}
    >
      <a className="navbar-brand mb-0 h1" href="/">
        <img
          className="d-inline-block align-top"
          src="http://localhost:4000/images/bslogo5.png"
          height="35"
          width="186"
        />
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
              href="/watch"
            >
              Watch
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
                <a href="/bvfootball" className="dropdown-item">
                  Boys Varsity
                </a>
              </li>

              <li>
                <a href="/bjvfootball" className="dropdown-item">
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
                <a href="/bvbasketball" className="dropdown-item">
                  Boys Varsity
                </a>
              </li>
              <li>
                <a href="/gvbasketball" className="dropdown-item">
                  Girls Varisity
                </a>
              </li>
              <li>
                <a href="/bjvbasketball" className="dropdown-item">
                  Boys JV
                </a>
              </li>
              <li>
                <a href="/gjvbasketball" className="dropdown-item">
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
                <a href="/bvbaseball" className="dropdown-item">
                  Boys Varsity
                </a>
              </li>

              <li>
                <a href="/bjvbaseball" className="dropdown-item">
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
              Soccer
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a href="/bvsoccer" className="dropdown-item">
                  Boys Varsity
                </a>
              </li>
              <li>
                <a href="/gvsoccer" className="dropdown-item">
                  Girls Varisity
                </a>
              </li>
              <li>
                <a href="/bjvsoccer" className="dropdown-item">
                  Boys JV
                </a>
              </li>
              <li>
                <a href="/gjvsoccer" className="dropdown-item">
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
              All Sports
            </a>
            <ul
              style={{ minWidth: 800 }}
              className="dropdown-menu multi-column columns-5"
              aria-labelledby="navbarDropdown"
            >
              <div class="row">
                <div style={{ minWidth: 200 }} class="col-sm-1">
                  <h5>Boys Varsity</h5>
                  <li>
                    <a href="/bvbaseball" className="dropdown-item">
                      Baseball
                    </a>
                  </li>
                  <li>
                    <a href="/bvbasketball" className="dropdown-item">
                      Basketball
                    </a>
                  </li>

                  <li>
                    <a href="/bvcrosscountry" className="dropdown-item">
                      Cross Country
                    </a>
                  </li>

                  <li>
                    <a href="/filmfestival" className="dropdown-item">
                      Film Festival
                    </a>
                  </li>

                  <li>
                    <a href="/bvfootball" className="dropdown-item">
                      Football
                    </a>
                  </li>

                  <li>
                    <a href="/forensics" className="dropdown-item">
                      Forensics
                    </a>
                  </li>

                  <li>
                    <a href="/golf" className="dropdown-item">
                      Golf
                    </a>
                  </li>

                  <li>
                    <a href="/bvintrack" className="dropdown-item">
                      Indoor Track
                    </a>
                  </li>

                  <li>
                    <a href="/bvouttrack" className="dropdown-item">
                      Outdoor Track
                    </a>
                  </li>

                  <li>
                    <a href="/scholasticbowl" className="dropdown-item">
                      Scholastic Bowl
                    </a>
                  </li>
                  <li>
                    <a href="/bvsoccer" className="dropdown-item">
                      Soccer
                    </a>
                  </li>

                  <li>
                    <a href="/bvsd" className="dropdown-item">
                      Swim and Dive
                    </a>
                  </li>

                  <li>
                    <a href="/bvtennis" className="dropdown-item">
                      Tennis
                    </a>
                  </li>

                  <li>
                    <a href="/theater" className="dropdown-item">
                      Theater
                    </a>
                  </li>

                  <li>
                    <a href="/wrestling" className="dropdown-item">
                      Wrestling
                    </a>
                  </li>
                </div>
                <div style={{ minWidth: 200 }} class="col-sm-1">
                  <h5>Girls Varsity</h5>

                  <li>
                    <a href="/gvbasketball" className="dropdown-item">
                      Basketball
                    </a>
                  </li>
                  <li>
                    <a href="/cheer" className="dropdown-item">
                      Cheer
                    </a>
                  </li>

                  <li>
                    <a href="/gxc" className="dropdown-item">
                      Cross Country
                    </a>
                  </li>
                  <li>
                    <a href="/filmfestival" className="dropdown-item">
                      Film Festival
                    </a>
                  </li>

                  <li>
                    <a href="/forensics" className="dropdown-item">
                      Forensics
                    </a>
                  </li>

                  <li>
                    <a href="/git" className="dropdown-item">
                      Indoor Track
                    </a>
                  </li>

                  <li>
                    <a href="/got" className="dropdown-item">
                      Outdoor Track
                    </a>
                  </li>
                  <li>
                    <a href="/scholasticbowl" className="dropdown-item">
                      Scholastic Bowl
                    </a>
                  </li>

                  <li>
                    <a href="/gvsoccer" className="dropdown-item">
                      Soccer
                    </a>
                  </li>
                  <li>
                    <a href="/gvsoftball" className="dropdown-item">
                      Softball
                    </a>
                  </li>

                  <li>
                    <a href="/gvsd" className="dropdown-item">
                      Swim and Dive
                    </a>
                  </li>

                  <li>
                    <a href="/gvtennis" className="dropdown-item">
                      Tennis
                    </a>
                  </li>
                  <li>
                    <a href="/theater" className="dropdown-item">
                      Theater
                    </a>
                  </li>
                  <li>
                    <a href="/gvvb" className="dropdown-item">
                      Volleyball
                    </a>
                  </li>
                </div>
                <div style={{ minWidth: 200 }} class="col-sm-1">
                  <h5>Boys JV</h5>
                  <li>
                    <a href="/bjvbaseball" className="dropdown-item">
                      Baseball
                    </a>
                  </li>
                  <li>
                    <a href="/bjvbasketball" className="dropdown-item">
                      Basketball
                    </a>
                  </li>

                  <li>
                    <a href="/bjvfootball" className="dropdown-item">
                      Football
                    </a>
                  </li>
                  <li>
                    <a href="/bjvsoccer" className="dropdown-item">
                      Soccer
                    </a>
                  </li>
                </div>
                <div style={{ minWidth: 200 }} class="col-sm-1">
                  <h5>Girls JV</h5>

                  <li>
                    <a href="/gjvbasketball" className="dropdown-item">
                      Basketball
                    </a>
                  </li>

                  <li>
                    <a href="/gjvsoccer" className="dropdown-item">
                      Soccer
                    </a>
                  </li>
                  <li>
                    <a href="/gjvsoftball" className="dropdown-item">
                      Softball
                    </a>
                  </li>
                  <li>
                    <a href="/gjvvolleyball" className="dropdown-item">
                      Volleyball
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </li>

          {/* <li onClick={handleLogout}>{user && "Logout"}</li> */}
        </ul>
      </div>
      {user == null && (
        <Button
          style={{
            backgroundColor: "#E9BA46",
            borderColor: "#daa520",
            color: "black",
            fontWeight: 600,
            fontSize: "1rem",
          }}
          href="/login"
        >
          Admin
        </Button>
      )}
      {user != null && (
        <Button
          type="submit"
          onClick={handleLogout}
          style={{
            backgroundColor: "#E9BA46",
            borderColor: "#daa520",
            color: "black",
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          Logout
        </Button>
      )}
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

/*
<li>
                    <a href="/" className="dropdown-item">
                      Baseball
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Basketball - Men
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Basketball - Women
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Cheer
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Cross Country - Men
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Cross Country - Women
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Film Festival
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Football
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Forensics
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Golf
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Indoor Track - Men
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Indoor Track - Women
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Outdoor Track - Men
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Outdoor Track - Women
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Scholastic Bowl
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Soccer - Men
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Soccer - Women
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Softball
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Swim and Dive - Men
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Swim and Dive - Women
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Swimming - Men
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Tennis - Men
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Tennis - Women
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Theater
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Volleyball
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      Wrestling
                    </a>
                  </li>


















                  <li>
                <a href="/basketball" className="dropdown-item">
                  Baseball
                </a>
              </li>
              <li>
                <a href="/basketball" className="dropdown-item">
                  Basketball - Men
                </a>
              </li>
              <li>
                <a href="/basketball" className="dropdown-item">
                  Basketball - Women
                </a>
              </li>
              <li>
                <a href="/basketball" className="dropdown-item">
                  Football
                </a>
              </li>
              <li>
                <a href="/basketball" className="dropdown-item">
                  Soccer
                </a>
              </li>
              <li>
                <a href="/basketball" className="dropdown-item">
                  Softball
                </a>
              </li>
              <li>
                <a href="/basketball" className="dropdown-item">
                  Volleyball
                </a>
              </li>
                  */
