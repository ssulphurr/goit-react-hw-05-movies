import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=453b881a671dd013b145c543ca73b9df`
      );

      try {
        const data = await response.json();
        setReviews(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.length > 0
          ? reviews.map(({ id, author, content }) => (
              <li key={id}>
                <div>
                  <h3>Author: {author}</h3>
                  <p>{content}</p>
                </div>
              </li>
            ))
          : "We couldn't find reviews for this film"}
      </ul>
    </>
  );
}