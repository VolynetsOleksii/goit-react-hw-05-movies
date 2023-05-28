import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchTrends } from 'components/Api/Api';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await fetchTrends();
        setMoviesList(movies);
      } catch (error) {
        toast.error('Something went wrong!');
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <main>
        <h1>Trending today</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <ul>
            {moviesList.map(({ id, title }) => (
              <li key={id}>
                <NavLink to={`/movies/${id}`}>{title}</NavLink>
              </li>
            ))}
          </ul>
        )}
        {isError && (
          <p>
            'The service is temporarily unavailable. Please try again later.'
          </p>
        )}
      </main>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Home;
