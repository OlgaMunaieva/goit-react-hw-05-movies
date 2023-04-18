import { Link, useLocation } from 'react-router-dom';
import { MovieItem } from './MoviesList.styled';

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

export default MoviesList;
