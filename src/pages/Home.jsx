import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import { fetchTrending } from 'services/fetchData';

export default function Home() {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchTrending();
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
      <MoviesList movies={trending} location={location} />
    </div>
  );
}
