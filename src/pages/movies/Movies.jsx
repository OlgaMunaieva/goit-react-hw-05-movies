import Loader from 'components/loader/Loader';
import { Text } from 'components/error/Error.components';
import { useEffect, useState } from 'react';
import { fetchSearch } from 'services/fetchAPI';
import MoviesList from 'components/moviesList/MoviesList';
import SearchFormSubmit from 'components/searchForm/SearchFormSubmit';
const { useSearchParams } = require('react-router-dom');

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) return;
    async function uploadMovies(query) {
      setIsLoading(true);
      try {
        const data = await fetchSearch(query);
        const movies = data.results;
        if (!data.total_results) {
          throw new Error('No data');
        } else {
          setMovies(movies);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    uploadMovies(query);
  }, [query]);

  const onSubmit = inputValue => {
    if (!inputValue) {
      setSearchParams({});
      setMovies([]);
    } else {
      setSearchParams({ query: inputValue });
    }
  };

  return (
    <>
      {error && <Text>{error} There are not movies</Text>}
      <SearchFormSubmit onSubmit={onSubmit} query={query} />
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
