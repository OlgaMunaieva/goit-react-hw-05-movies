import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  // useEffect(() => {
  //   http запрос
  // }, [])
  // console.log(movieId);
  return (
    <>
      <h1>{movieId}</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="review">Review</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
