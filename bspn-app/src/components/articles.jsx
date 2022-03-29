import Article from "../components/article";
import { Line } from "./line";

export default function Articles({ articles }) {
  return (
    <div>
      {articles.map((a) => (
        <Article article={a} />
      ))}
    </div>
  );
}
