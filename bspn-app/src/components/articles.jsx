import Article from "../components/article";
//hi

export default function Articles({ articles }) {
  const rev_articles = articles.reverse();
  return (
    <div>
      {rev_articles.map((a) => (
        <div style={{ paddingBottom: 10 }}>
          <Article article={a} />
        </div>
      ))}
    </div>
  );
}
