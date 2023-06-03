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
      try {
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.loh(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ul>
        {cast.length > 0
          ? cast.map(({ id, name, character, profile_path }) => (
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
            ))
          : 'We have no info about cast of this film'}
      </ul>
    </>
  );
}
