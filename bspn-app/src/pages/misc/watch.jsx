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
  const [editMode, setEditMode] = useState(false);
  const [link, setLink] = useState("");
  const { user } = useContext(Context);

  var cur_url = window.location.href;

  useEffect(() => {
    const fetchStreams = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/streams/id=625d98bc1e126b9551396c11");
        console.log(res);
        setStreams(res.data);
        setLink(res.data.link);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchStreams();
  }, []);

  const handleSave = async () => {
    try {
      await axios.put(`/streams/${streams._id}`, {
        link,
      });
      window.location.replace(cur_url);
      // setUpdateMode(false);
    } catch (error) {
      console.log("fail");
    }
  };

  // const handleCancel = async () => {
  //   setEditMode(false);
  // };

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
          <Row className="gx-0" style={{ paddingTop: 20, paddingBottom: 20 }}>
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
                  {editMode ? (
                    <div class="form-group">
                      <p style={{ textAlign: "center" }}>
                        Paste Youtube Link Here:
                      </p>
                      <input
                        type="text"
                        class="form-control"
                        style={{ width: 350 }}
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                      />
                    </div>
                  ) : (
                    <Button
                      onClick={() => setEditMode(true)}
                      style={{
                        backgroundColor: "#daa520",
                        borderColor: "#daa520",
                        color: "black",
                        fontWeight: 600,
                        fontSize: "1.5rem",
                      }}
                    >
                      Change Stream
                    </Button>
                  )}
                </div>
              )}

              {editMode && (
                <div
                  style={{
                    paddingBottom: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <button
                    type="submit"
                    // style={{ alignL }}
                    className="center"
                    class="btn btn-success btn-default pull-left"
                    onClick={handleSave}
                  >
                    <span class="glyphicon glyphicon-off"></span> Save Link
                  </button>{" "}
                </div>
              )}
              <Broadcast props={streams.link.toString()} />
            </Col>
            <Col></Col>
          </Row>
        </div>
      )}
    </div>
  );
}
