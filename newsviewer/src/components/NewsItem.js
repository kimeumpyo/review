const NewsItem = ({ article, setId }) => {
  const clickHandler = () => setId(article.id);

  return (
      <li onClick={clickHandler}>
        <div>{article.title}</div>
        <div>{article.body}</div>
        <div>작성자 : {article.userId}</div>
        <div>아이디 : {article.id}</div>
      </li>
  );
};

export default NewsItem;
