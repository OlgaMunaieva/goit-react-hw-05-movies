import { FiSearch } from 'react-icons/fi';
import { SearchForm, SearchInput, SubmitButton } from './SearchForm.styled';
import { useEffect, useState } from 'react';

const SearchFormSubmit = ({ onSubmit, query }) => {
  const [queryOnChange, setQueryOnChange] = useState(query);

  useEffect(() => {
    setQueryOnChange(JSON.parse(localStorage.getItem('queryMovies')) ?? '');
  }, []);

  const handleChange = ({ target: { value } }) => {
    setQueryOnChange(value);
    localStorage.setItem('queryMovies', JSON.stringify(value));
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.search.value;
    onSubmit(inputValue);
  };

  return (
    <SearchForm onSubmit={handleOnSubmit}>
      <SearchInput
        onChange={handleChange}
        name="search"
        value={queryOnChange}
        type="search"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <SubmitButton type="submit">
        Search
        <FiSearch />
      </SubmitButton>
    </SearchForm>
  );
};

export default SearchFormSubmit;
