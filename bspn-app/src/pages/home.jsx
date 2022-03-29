import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Articles from "../components/articles";
import { Feed } from "../components/feed";
import { Line } from "../components/line";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/posts");
        setArticles(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchArticles();
  }, []);
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <Feed />
          <h2>BSPN</h2>
          <Line />
          <Articles articles={articles} /> <Line />
          <Line />
        </div>
      )}
    </div>
  );
}
