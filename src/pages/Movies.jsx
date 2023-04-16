import Loader from 'components/loader/Loader';
import { Text } from 'components/text/Text.components';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import fetchSearch from 'services/fetchSearch';
const { Link, useSearchParams } = require('react-router-dom');

const Movies = () => {
  const [queryOnChange, setQueryOnChange] = useState('');
  const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    uploadMovies(query);
  }, [query]);

  async function uploadMovies(query) {
    console.log('after useEffect', query);
    setIsLoading(true);
    try {
      const data = await fetchSearch(query);
      console.log(data);
      const movies = data.results;
      console.log(movies);
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

  // const handleQuery = queryOnChange => {
  //   if (query !== queryOnChange) {
  //     setQuery(queryOnChange);
  //     setMovies([]);
  //     // setPage(1);
  //   }
  // };

  const handleChange = ({ target: { value } }) => {
    setQueryOnChange(value);
  };

  const handleForm = ({ value }) => {
    value = queryOnChange;
    setQueryOnChange(value);
  };

  const handleOnSubmit = event => {
    console.log('submit', event.target.elements.search.value);
    event.preventDefault();
    // setQueryOnChange(event.target.elements.search.value);
    setSearchParams({ query: event.target.elements.search.value });
    // handleQuery(event.target.elements.search.value);
    handleForm(event.target);
  };

  console.log('movies', movies);
  console.log('queryOnChange', queryOnChange);
  console.log('query', query);

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
