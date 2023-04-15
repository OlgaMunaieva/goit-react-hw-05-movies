import Loader from 'components/loader/Loader';
import { Text } from 'components/text/Text.components';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import fetchMovie from 'services/fetchMovie';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    uploadMovie(movieId);
  }, [movieId]);

  async function uploadMovie(movieId) {
    console.log(movieId);
    setIsLoading(true);
    try {
      const movie = await fetchMovie(movieId);
      console.log(movie);
      if (!movie) {
        throw new Error('No data');
      } else {
        setMovie(movie);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const {
    original_title,
    release_date,
    poster_path,
    vote_average,
    overview,
    genres,
  } = movie;
  const year = new Date(release_date).getFullYear();
  const userScore = Math.round(vote_average * 10);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Text>{error} There are not movies</Text>}
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={original_title}
      />
      <h1>
        {original_title} ({year})
      </h1>
      <p>User score: {userScore}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>
        {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
      </ul>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
