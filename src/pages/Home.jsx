import Loader from 'components/loader/Loader';
import { Text } from 'components/text/Text.components';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import fetchTrendMovies from 'services/fetchTrends';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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
          <li key={id}>
            <NavLink key={id} to={`/movies/${id}`}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
