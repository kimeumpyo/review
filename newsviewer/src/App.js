import axios from "axios";
import { useState, useEffect } from "react";
import NewsItems from "./components/NewsItems";

const App = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts"
      )
      .then((res) => {
        console.log(res);
        setArticles(res.data);
        setLoading(true);
      })
      .catch((err) => console.error(err));

    if (!articles) {
      return <div>Loading....</div>;
    }
  }, []);

  return (
    <>
      <h1>뉴스 뷰어</h1>
      <NewsItems articles={articles} />
    </>
  );
};

export default App;
