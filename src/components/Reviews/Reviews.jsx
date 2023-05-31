import { fetchMovieReviews } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isError, setIsError] = useState('');

  useEffect(() => {
    if (!movieId) return;

    const fetchReviews = async movieId => {
      try {
        fetchMovieReviews(movieId).then(setReviews);
      } catch (error) {
        toast.error('Oops, something went wrong, please try again');
        setIsError(error.message);
      } 
    };
    fetchReviews(movieId);
}, [movieId]);
  return (
    <div>
    {reviews.length ? (
      <div>
        {reviews?.map(({ id, author, content }) => (
          <div key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </div>
        ))}
      </div>
    ) : (
      <p>There are no reviews for that movie</p>
    )}
     {isError && (
        <p>'The service is temporarily unavailable. Please try again later.'</p>
      )}
  </div>
  );
};

export default Reviews;
