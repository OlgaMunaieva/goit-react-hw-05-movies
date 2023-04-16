import Loader from 'components/loader/Loader';
import { Text } from 'components/text/Text.components';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import fetchSearch from 'services/fetchSearch';
const { Link, useSearchParams } = require('react-router-dom');

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [queryOnChange, setQueryOnChange] = useState(query || '');
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

  const handleForm = ({ value }) => {
    value = queryOnChange;
    setQueryOnChange(value);
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    !event.target.elements.search.value
      ? setSearchParams({})
      : setSearchParams({ query: event.target.elements.search.value });

    handleForm(event.target);
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <Text>{error} There are not movies</Text>}
      <form className="SearchForm" onSubmit={handleOnSubmit}>
        <input
          className="SearchForm-input"
          onChange={handleChange}
          name="search"
          value={queryOnChange}
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className="SearchForm-button">
          <FiSearch />
        </button>
      </form>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link key={id} to={`${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
