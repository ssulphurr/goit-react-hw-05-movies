import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

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
    setSearchParams({ query: e.target.elements.query.value });
    e.target.elements.query.value = '';
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>

      {query !== null ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
