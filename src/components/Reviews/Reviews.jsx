import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsMovies } from 'services/ApiGet';
import { UL } from './Reviews.styled';

function Reviews() {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsMovies(movieId).then(({ data }) => {
      setReview(data.results);
    });
  }, [movieId]);

  if (!review.length) {
    return <p>Sorry, we don't have any reviews for this movie.</p>;
  }

  return (
    <>
      <UL>
        {review.map(({ id, content, author }) => {
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </UL>
    </>
  );
}

export default Reviews;
