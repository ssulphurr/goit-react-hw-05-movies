import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import MoviesList from '../components/MoviesList';
import { fetchMovies } from 'services/fetchData';
import Loader from 'components/Loader/Loader';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetchMovies(query);
      try {
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const input = e.target.elements.query;
    const nextParams = input.value.trim() !== '' ? { query: input.value } : {};
    setSearchParams(nextParams);
    input.value = '';
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />

      {isLoading && <Loader />}

      {query && <MoviesList movies={movies} />}

      {query && movies.length === 0 && !isLoading && (
        <div>We have 0 films titled "{query}"</div>
      )}
    </>
  );
}
