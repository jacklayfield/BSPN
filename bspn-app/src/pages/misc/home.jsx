import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import Articles from "../../components/articles";
import { Feed } from "../../components/feed";
import { Line } from "../../components/line";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingAds, setLoadingAds] = useState(true);
  const [articles, setArticles] = useState([]);
  const [ads, setAds] = useState([]);

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

    const fetchAds = async () => {
      setLoadingAds(true);
      try {
        const res = await axios.get("/ads");
        setAds(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoadingAds(false);
    };
    fetchAds();
  }, []);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "rgb(227, 227, 227)",
      }}
    >
      {loading && <div>Loading</div>}
      {!loading && !loadingAds && (
        <div>
          <h1 className="web-title">BSPN</h1>
          <Feed articles={articles} ads={ads} />
        </div>
      )}
    </div>
  );
}
