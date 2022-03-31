import Article from "../components/article";
// import { Line } from "./line";

export default function Articles({ articles }) {
  const rev_articles = articles.reverse();
  return (
    <div>
      {rev_articles.map((a) => (
        <Article article={a} />
      ))}
    </div>
  );
}
