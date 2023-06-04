import { useState, useEffect } from 'react';
import MoviesList from '../components/MoviesList';
import { fetchTrending } from 'services/fetchData';
import Loader from 'components/Loader/Loader';

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetchTrending();
      try {
        const movies = await response.json();
        setTrending(movies.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {isLoading ? <Loader /> : <MoviesList movies={trending} />}

      {error && <h3>Oops, something went wrong: {error.message}</h3>}
    </>
  );
}
