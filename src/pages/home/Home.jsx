import Loader from 'components/loader/Loader';
import { Text } from 'components/text/Text.components';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import fetchTrendMovies from 'services/fetchTrends';
import { TrendMovieItem } from './Home.styled';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();

  useEffect(() => {
    uploadTrends();
  }, []);

  async function uploadTrends() {
    setIsLoading(true);
    try {
      const trends = await fetchTrendMovies();

      if (!trends.total_results) {
        throw new Error('No data');
      } else {
        setTrendMovies(trends.results);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {error && <Text>{error} There are not movies</Text>}
      <ul>
        {trendMovies.map(({ title, id }) => (
          <TrendMovieItem key={id}>
            <NavLink state={{ from: location }} key={id} to={`/movies/${id}`}>
              {title}
            </NavLink>
          </TrendMovieItem>
        ))}
      </ul>
    </>
  );
};

export default Home;
