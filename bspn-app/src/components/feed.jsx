import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect, useState } from "react";
import "../styling/body.css";
import axios from "axios";
// import Article from "../components/article";
import { Score } from "../components/score";
import { Broadcast } from "../components/broadcast";
import { Line } from "../components/line";
import Articles from "../components/articles";

export function Feed({ articles }) {
  return (
    <div>
      <Row className="gx-0">
        <Col
          style={{
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <Score />
        </Col>
        <Col xs={5}>
          <Articles articles={articles} />
        </Col>
        <Col style={{ paddingLeft: 24, paddingRight: 24 }}>
          {/* <Broadcast /> */}
        </Col>
      </Row>
    </div>
  );
}
