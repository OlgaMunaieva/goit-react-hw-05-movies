import Loader from 'components/loader/Loader';
import { Text } from 'components/error/Error.components';
import { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'services/fetchAPI';
import MoviesList from 'components/moviesList/MoviesList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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
      <MoviesList movies={trendMovies} />
    </>
  );
};

export default Home;
