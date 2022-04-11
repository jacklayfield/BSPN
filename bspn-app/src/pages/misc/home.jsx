import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import Articles from "../../components/articles";
import { Feed } from "../../components/feed";
import { Line } from "../../components/line";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/articles");
        setArticles(res.data);
      } catch (error) {
        console.log(error);
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
          <h2>BSPN</h2>
          <Line />
          <Feed articles={articles} />
          <Line />
        </div>
      )}
    </div>
  );
}
