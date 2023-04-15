import Loader from 'components/loader/Loader';
import { Text } from 'components/text/Text.components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchCast from 'services/fetchCast';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    uploadCast(movieId);
  }, [movieId]);

  async function uploadCast(movieId) {
    console.log(movieId);
    setIsLoading(true);
    try {
      const credits = await fetchCast(movieId);
      console.log(credits);
      const cast = credits.cast;
      console.log(cast);
      if (!cast) {
        throw new Error('No data');
      } else {
        setCast(cast);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  console.log(cast);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Text>{error} There are not movies</Text>}
      <ul>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
