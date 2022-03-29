import Article from "../components/article";

export default function Articles({ articles }) {
  return (
    <div>
      {articles.map((a) => (
        <Article article={a} />
      ))}
    </div>
  );
}
