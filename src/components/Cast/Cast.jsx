import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=453b881a671dd013b145c543ca73b9df`
      );

      const data = await response.json();
      setCast(data.cast);
    };

    fetchData();
  }, []);

  return (
    <>
      <ul>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <div className={css.cast_member}>
              <img
                width={80}
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
              {name}
              <p>Character: {character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
