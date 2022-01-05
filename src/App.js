import "./App.css";
import { useEffect, useState } from "react";
import Article from "./components/Article";

function App() {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsList(data);
      });
  }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-6xl font-bold mt-4 mb-16'>Space News</h1>

      {newsList.map((article) => {
        return <Article article={article} key={article.id} />;
      })}
    </div>
  );
}

export default App;
