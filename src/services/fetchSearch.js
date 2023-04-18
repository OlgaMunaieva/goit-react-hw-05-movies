import axios from 'axios';
import { API_KEY, API_PATH } from './fetchAPI';

const LANGUAGE = 'en-US';

async function fetchSearch(searchQuery) {
  const response = await axios.get(
    `${API_PATH}/search/movie?api_key=${API_KEY}&language=${LANGUAGE}&query=${searchQuery}&page=1&include_adult=false`
  );
  if (response.statusText) {
    throw new Error(response.statusText);
  }
  return response.data;
}

export default fetchSearch;
