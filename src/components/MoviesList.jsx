import { Link } from 'react-router-dom';

export default function MoviesList({ movies, location }) {
  return (
    <ul>
      {movies.map(movie => {
        console.log(location);
        return (
          <li key={movie.id}>
            <Link
              to={
                location.pathname.includes('movies')
                  ? `${movie.id}`
                  : `movies/${movie.id}`
              }
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
