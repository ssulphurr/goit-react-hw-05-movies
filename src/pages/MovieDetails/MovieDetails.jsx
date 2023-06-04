import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';
import defaultImg from 'components/defaultImg';
import { fetchMovieDetails } from 'services/fetchData';
import Loader from 'components/Loader/Loader';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHrefRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetchMovieDetails(movieId);

      try {
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  const { poster_path, title, vote_average, overview } = movieData;
  const genres =
    movieData.genres?.length > 0
      ? movieData.genres.map(genre => genre.name).join(', ')
      : [];

  return (
    <>
      <Link to={backLinkHrefRef.current}>Go Back</Link>
      <br />
      {isLoading && <Loader />}

      {!isLoading && movieData && (
        <>
          <div className={css.movie_wrapper}>
            <img
              width={300}
              className={css.movie_img}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : defaultImg
              }
              alt={title}
            />
            <div className={css.movie_info}>
              <h2>{title}</h2>
              <p>User score: {parseInt(vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres}</p>
            </div>
          </div>
        </>
      )}

      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
