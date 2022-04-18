import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
// import Articles from "../../components/articles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Context } from "../../context/context";
import "../../styling/sportsPageLayout.css";
import { Broadcast } from "../../components/broadcast";
import Button from "react-bootstrap/Button";

export default function Watch() {
  const [loading, setLoading] = useState(true);
  const [streams, setStreams] = useState([]);
  const { user } = useContext(Context);

  useEffect(() => {
    const fetchStreams = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/streams/");
        console.log(res);
        setStreams(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchStreams();
  }, []);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "rgb(227, 227, 227)",
      }}
    >
      {loading && (
        <div>
          <p>Loading</p>
        </div>
      )}
      {!loading && (
        <div>
          <Row style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Col></Col>
            <Col xs={8}>
              {user != null && (
                <div
                  style={{
                    padding: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: "#daa520",
                      borderColor: "#daa520",
                      color: "black",
                      fontWeight: 600,
                      fontSize: "1.5rem",
                    }}
                    href="/upload"
                  >
                    Change Stream
                  </Button>
                </div>
              )}
              <Broadcast props={streams[1].link.toString()} />
            </Col>
            <Col></Col>
          </Row>
        </div>
      )}
    </div>
  );
}
