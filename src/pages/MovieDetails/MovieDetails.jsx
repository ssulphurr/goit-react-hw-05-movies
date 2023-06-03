import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const location = useLocation();
  const backLinkHrefRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=453b881a671dd013b145c543ca73b9df`
      );

      try {
        const data = await response.json();
        setMovieData(data);
      } catch (error) {}
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
      <div className={css.movie_wrapper}>
        <img
          className={css.movie_img}
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
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
      <hr />
      <p>Adittional inforemation</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
