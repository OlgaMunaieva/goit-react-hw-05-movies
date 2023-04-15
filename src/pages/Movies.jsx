import Loader from 'components/loader/Loader';
import { Text } from 'components/text/Text.components';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import fetchSearch from 'services/fetchSearch';
const { Link } = require('react-router-dom');

const Movies = () => {
  const [queryOnChange, setQueryOnChange] = useState('');
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    fetchSearch(query)
      .then(data => {
        if (!data.total_results) {
          throw new Error('No Data');
        }
        setMovies(data.results);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [query]);

  const getSearchQuery = queryOnChange => {
    if (query !== queryOnChange) {
      setQuery(queryOnChange);
      setMovies([]);
      // setPage(1);
    }
  };

  const handleChange = ({ target: { value } }) => {
    setQueryOnChange(value);
  };

  const setForm = ({ value }) => {
    value = queryOnChange;
    setQueryOnChange(value);
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    setQueryOnChange(event.target.value);
    getSearchQuery(query);
    setForm(event.target);
  };

  console.log(movies);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Text>{error} There are not movies</Text>}
      <form className="SearchForm" onSubmit={handleOnSubmit}>
        <input
          className="SearchForm-input"
          onChange={handleChange}
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
      {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5'].map(dog => (
        <Link key={dog} to={`${dog}`}>
          {dog}
        </Link>
      ))}
    </>
  );
};

export default Movies;
