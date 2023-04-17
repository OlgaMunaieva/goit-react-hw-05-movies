import Loader from 'components/loader/Loader';
import { Text } from 'components/text/Text.components';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import fetchSearch from 'services/fetchSearch';
const { Link, useSearchParams, useLocation } = require('react-router-dom');

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [queryOnChange, setQueryOnChange] = useState(query);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) return;
    uploadMovies(query);
  }, [query]);

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

  const handleChange = ({ target: { value } }) => {
    setQueryOnChange(value);
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.search.value;
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
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={handleChange}
          name="search"
          value={queryOnChange}
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">
          <FiSearch />
        </button>
      </form>
      {isLoading && <Loader />}
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link state={{ from: location }} to={`${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
