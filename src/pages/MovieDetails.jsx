import { fetchMovieDetails } from 'components/Api/Api';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    if (!movieId) return;

    const fetchSelectedMovie = async movieId => {
      try {
        fetchMovieDetails(movieId).then(setSelectedMovie);
      } catch (error) {
        toast.error("Oops, something went wrong, please try again");
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);
  return (
    <>
      <Link to={location?.state?.from ?? '/'}>
        <Button type="button">Go back</Button>
      </Link>

      <MovieCard movie={selectedMovie} />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
