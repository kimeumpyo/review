const NewsItem = ({ article }) => {
  return (
    <>
      <li>
        <div>{article.title}</div>
        <div>{article.body}</div>
        <div>작성자 : {article.userId}</div>
      </li>
    </>
  );
};

export default NewsItem;
