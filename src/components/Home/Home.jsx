import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=453b881a671dd013b145c543ca73b9df'
      );
      try {
        const movies = await response.json();
        setTrending(movies.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trending.map(trend => {
          return (
            <li key={trend.id}>
              <Link>{trend.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
