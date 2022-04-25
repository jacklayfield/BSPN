import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "../styling/body.css";
import { Line } from "./line";

export function Footer() {
  return (
    <footer style={{ background: "#DAA520" }} class="text-center " id="footer">
      <div>
        <hr id="footerline"></hr>
      </div>
      <div>
        <section class="mb-1">
          <a
            class="btn btn-primary btn-floating m-1"
            style={{ background: "#3b5998" }}
            href="https://www.facebook.com/bobcatsportslive/"
            role="button"
          >
            <FaFacebook />
          </a>
          <a
            class="btn btn-primary btn-floating m-1"
            style={{ background: "#55acee" }}
            href="https://twitter.com/bobcat_live"
            role="button"
          >
            <FaTwitter />
          </a>
          <a
            class="btn btn-primary btn-floating m-1"
            style={{ background: "#ac2bac" }}
            href="https://www.instagram.com/bobcat_live/"
            role="button"
          >
            <FaInstagram />
          </a>
        </section>
      </div>
      <div
        class="text-center p-1"
        style={{
          background: "#FFFFFF",
          color: "#858585",
          fontFamily: "Trebuchet MS",
          fontStyle: "italic",
        }}
        id="poweredby"
      >
        Powered by&nbsp;
        <a href="https://cs.vt.edu/">BSPN</a>
      </div>
    </footer>
  );
}
