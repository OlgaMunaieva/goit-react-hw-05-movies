import Loader from 'components/loader/Loader';
import { Text } from 'components/text/Text.components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchCast from 'services/fetchCast';
import { CastItem, CastList } from './Cast.styled';
import { FaPortrait } from 'react-icons/fa';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    uploadCast(movieId);
  }, [movieId]);

  async function uploadCast(movieId) {
    setIsLoading(true);
    try {
      const credits = await fetchCast(movieId);
      const cast = credits.cast;
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

  return (
    <>
      {isLoading && <Loader />}
      {error && <Text>{error} There are not movies</Text>}
      <CastList>
        {cast.map(({ id, name, character, profile_path }) => {
          console.log(`https://image.tmdb.org/t/p/w200/${profile_path}`);
          return (
            <CastItem key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={name}
                />
              ) : (
                <FaPortrait
                  style={{ display: 'block', width: '100%' }}
                  color="rgb(60 80 60 )"
                  size={300}
                />
              )}
              <p>{name}</p>
              <p>{character}</p>
            </CastItem>
          );
        })}
      </CastList>
    </>
  );
};

export default Cast;
