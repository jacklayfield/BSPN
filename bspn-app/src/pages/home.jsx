import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Feed } from "../components/feed";
import { Line } from "../components/line";
import axios from "axios";
import Articles from "../components/articles";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get("/posts");
      setArticles(res.data);
      // console.log(res.data[0].description);
    };
    fetchArticles();
  }, []);
  return (
    <div>
      <div className="m-5">
        <h1>Bobcat Sports Home</h1>
      </div>
      <body id="feed-body">
        <Line />
        <Feed />
        <Articles articles={articles} />
      </body>
    </div>
  );
}
