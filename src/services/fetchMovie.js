import axios from 'axios';
import { API_KEY, API_PATH } from './settings';

const LANGUAGE = 'en-US';

async function fetchMovie(movie_id) {
  const response = await axios.get(
    `${API_PATH}/movie/${movie_id}?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  console.log(response);
  if (response.statusText) {
    throw new Error(response.statusText);
  }
  return response.data;
}

export default fetchMovie;