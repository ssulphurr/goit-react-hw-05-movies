import { useState, useEffect } from 'react';
import MoviesList from '../components/MoviesList';
import { fetchTrending } from 'services/fetchData';
import Loader from 'components/Loader/Loader';

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetchTrending();
      try {
        const movies = await response.json();
        setTrending(movies.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading ? <Loader /> : <MoviesList movies={trending} />}
    </div>
  );
}
