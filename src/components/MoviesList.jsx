import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MoviesList({ movies, location }) {
  return (
    <ul>
      {movies.map(movie => {
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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  location: PropTypes.object.isRequired,
};