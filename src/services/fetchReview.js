import axios from 'axios';
import { API_KEY, API_PATH } from './settings';

const LANGUAGE = 'en-US';

async function fetchReview(movie_id) {
  const response = await axios.get(
    `${API_PATH}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
  );
  console.log(response);
  if (response.statusText) {
    throw new Error(response.statusText);
  }
  return response.data;
}

export default fetchReview;
