import Loader from 'components/loader/Loader';
import { Text } from 'components/text/Text.components';
import { Suspense, useRef } from 'react';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import fetchMovie from 'services/fetchMovie';
import {
  GenresList,
  LinkButton,
  MovieInformation,
  MovieMoreInformation,
} from './MovieDetails.styled';
import { TiArrowBackOutline } from 'react-icons/ti';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? `/movies`);

  useEffect(() => {
    uploadMovie(movieId);
  }, [movieId]);

  async function uploadMovie(movieId) {
    setIsLoading(true);
    try {
      const movie = await fetchMovie(movieId);
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
      <LinkButton to={backLinkLocation.current}>
        <TiArrowBackOutline />
        Go back
      </LinkButton>
      {isLoading && <Loader />}
      {error && <Text>{error} There are not movies</Text>}
      <MovieInformation>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title}
        />
        <div>
          <h1>
            {original_title} ({year})
          </h1>
          <p>User score: {userScore}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <GenresList>
            {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
          </GenresList>
        </div>
      </MovieInformation>
      <MovieMoreInformation>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
        </ul>
      </MovieMoreInformation>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
