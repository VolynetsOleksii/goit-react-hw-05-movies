import { fetchMovieCast } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUserAlt } from 'react-icons/fa';
import { ActorContainer, ActorImg } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isError, setIsError] = useState('');

  useEffect(() => {
    if (!movieId) return;

    const fetchCast = async movieId => {
      try {
        fetchMovieCast(movieId).then(setCast);
      } catch (error) {
        toast.error('Oops, something went wrong, please try again');
        setIsError(error.message);
      } 
    };

    fetchCast(movieId);
  }, [movieId]);
  return (
    <div>
      {cast.length ? (
        <ActorContainer>
          {cast?.map(({ id, profile_path, name, character }) => (
            <div key={id}>
              {profile_path ? (
                <ActorImg
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={name}
                />
              ) : (
                <FaUserAlt
                  style={{ display: 'block', width: '200px', height: '300px' }}
                />
              )}
              <div>
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </div>
            </div>
          ))}
        </ActorContainer>
      ) : (
        <p>There is no casting available for that movie</p>
      )}
      {isError && (
        <p>'The service is temporarily unavailable. Please try again later.'</p>
      )}
    </div>
  );
};

export default Cast;
