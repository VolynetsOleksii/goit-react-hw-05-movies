import PropTypes from 'prop-types';

const MovieCard = ({
  movie: { title, release_date, poster_path, genres, overview, vote_average },
}) => {
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : '';

  const releaseDate = new Date(release_date);
  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h2>
          {title ?? 'Unknown'} ({releaseYear ?? releaseYear})
        </h2>

        <div>
          <span>User Score</span>
          <p>{(vote_average * 10).toFixed(0)}%</p>
        </div>
        <div>
          <span>Overview</span>
          <p>{overview}</p>
        </div>
        <div>
          <span>Genres</span>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
export default MovieCard;
