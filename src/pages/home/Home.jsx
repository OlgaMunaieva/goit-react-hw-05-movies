import Loader from 'components/loader/Loader';
import { Text } from 'components/text/Text.components';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetchTrendMovies from 'services/fetchTrends';
import MoviesList from 'components/moviesList/MoviesList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();

  useEffect(() => {
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
    uploadTrends();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {error && <Text>{error} There are not movies</Text>}
      <MoviesList movies={trendMovies} location={location} />
    </>
  );
};

export default Home;
