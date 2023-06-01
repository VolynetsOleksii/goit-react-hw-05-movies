import { fetchSearch } from 'components/Api/Api';
import Loader from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';

    if (!query) return;

    const getMovies = async () => {
      try {
        setIsLoading(true);
        const movielist = await fetchSearch(query);

        if (movielist.length === 0) {
          toast.info('No movies found');
          setMovies([]);
        } else {
          setMovies(movielist);
        }
      } catch (error) {
        toast.error(error.message);
        setIsError(error.message);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, [searchParams]);

  const handleFormSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
      {isError && (
        <p>'The service is temporarily unavailable. Please try again later.'</p>
      )}
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Movies;
