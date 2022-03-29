import Article from "../components/article";

export default function Articles({ articles }) {
  return (
    <div>
      {console.log(articles[0])}
      {console.log(articles[1])}
      {console.log(articles[2])}
      {console.log(articles[3])}
      {/* {articles[1].title} */}
      {/* {articles.map((a) => (
        <Article article={a} />
      ))} */}
      <Article article={articles[1]} />
    </div>
  );
}
