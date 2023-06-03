import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import MoviesList from '../components/MoviesList';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=453b881a671dd013b145c543ca73b9df&query=${query}`
      );
      try {
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
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

      {query && movies.length === 0 && (
        <div>We have 0 films titled "{query}"</div>
      )}
      {query && <MoviesList movies={movies} location={location} />}
    </>
  );
}
