import { Link, useLocation } from 'react-router-dom';
import { MovieItem } from './MoviesList.styled';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <MovieItem key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {title}
          </Link>
        </MovieItem>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesList;
