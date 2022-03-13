import "bootstrap/dist/css/bootstrap.min.css";
import { React, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styling/nav.css";

export function NavBar() {
  const nRef = useRef();

  const switchNav = () => {
    nRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={"./radford.png"} alt="Cannot display logo" />
      <nav ref={nRef}>
        <a href="/">Home</a>
        <a href="/hockey">Hockey</a>
        <a href="/football">Football</a>
        <button className="nav-btn nav-close-btn" onClick={switchNav}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={switchNav}>
        <FaBars />
      </button>
    </header>
  );
}
