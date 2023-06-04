import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import defaultImg from 'components/defaultImg';
import { fetchCast } from 'services/fetchData';
import Loader from 'components/Loader/Loader';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetchCast(movieId);
      try {
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {!isLoading &&
          cast.length > 0 &&
          cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <div className={css.cast_member}>
                <img
                  width={80}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                />
                {name}
                <p>Character: {character}</p>
              </div>
            </li>
          ))}
      </ul>
      {!isLoading && cast.length === 0 && (
        <p>We have no info about cast of this film</p>
      )}

      {error && <h3>Oops, something went wrong: {error.message}</h3>}
    </>
  );
}
