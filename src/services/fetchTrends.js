import axios from 'axios';
import { API_KEY, API_PATH } from './settings';

const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'week';

async function fetchTrendMovies() {
  const response = await axios.get(
    `${API_PATH}/trending/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}`
  );
  if (response.statusText) {
    throw new Error(response.statusText);
  }
  return response.data;
}

export default fetchTrendMovies;
