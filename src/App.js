import './App.css';
import { useEffect, useState } from 'react';
import News from './News'

function App() {
  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("India")

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-15&apiKey=53ff4a92ed934504b554dbf0d62a1629`)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
        console.log(news.articles);
      })
      .catch((err) => {
        console.log(err);
      })

  }, [category]);

  return (
    <div className="App">
      <header className='header'>
        <h1> News App</h1>
        <input type='text' onChange={(event) => {
          if (event.target.value !== "") {
            setCategory(event.target.value);
          }
          else {
            setCategory("india")
          }
        }} placeholder='Search News' />
      </header>

      <section className='news_articles'>
        {
          articles.length !== 0 ?
            articles.map((article) => {
              return (
                <News article={article} />
              )
            })
            :
            <h2>No News Found for Searched Text</h2>
        }


      </section>
    </div>
  );
}

export default App;
