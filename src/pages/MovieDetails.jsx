import { fetchMovieDetails } from 'components/Api/Api';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
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
      <Link to={location?.state?.from ?? '/home'}>
        <button type="button">Go back</button>
      </Link>

      <MovieCard movie={selectedMovie} />
      <ul>
        <li>
          <Link to="cast">Watch casting</Link>
        </li>
        <li>
          <Link to="reviews">Watch reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
