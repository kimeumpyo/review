import axios from "axios";
import { useState, useEffect } from "react";
import NewsItems from "./components/NewsItems";

const App = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);

  // 처음 호출후 갱신이 안된다!
  useEffect(() => {
    const addParams = id ? `/${id}` : "";

    axios
      .get(`https://jsonplaceholder.typicode.com/posts${addParams}`)
      .then((res) => {
        console.log(res);
        setArticles(res.data);
        setLoading(true);
      })
      .catch((err) => console.error(err));

  }, [id]);

  if (!articles) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <h1>뉴스 뷰어</h1>
      <NewsItems articles={articles} setId={setId}/>
    </>
  );
};

export default App;
