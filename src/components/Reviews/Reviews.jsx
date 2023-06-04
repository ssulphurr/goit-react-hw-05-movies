import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/fetchData';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchReviews(movieId);

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
