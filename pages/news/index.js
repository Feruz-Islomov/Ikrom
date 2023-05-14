function NewsByUser({ articles }) {
  console.log(articles);
  return (
    <>
      <h1>List of Users</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2 className="bg-success text-light">
              {article.id} {article.title} | {article.category}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default NewsByUser;

export async function getServerSideProps() {
  const { news } = await import("../../db.json");

  // const response = await fetch("http://localhost:4000/news");
  // const data = response.json();
  console.log(news);
  return {
    props: {
      articles: news,
    },
  };
}
