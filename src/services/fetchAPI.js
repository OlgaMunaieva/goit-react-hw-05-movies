import axios from 'axios';

export const API_KEY = '3c96097624a2fa9e4b8164ba6b94edc9';
export const API_PATH = 'https://api.themoviedb.org/3';

const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'week';
const LANGUAGE = 'en-US';

export async function fetchTrendMovies() {
  const response = await axios.get(
    `${API_PATH}/trending/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}`
  );
  if (response.statusText) {
    throw new Error(response.statusText);
  }
  return response.data;
}

export async function fetchSearch(searchQuery) {
  const response = await axios.get(
    `${API_PATH}/search/movie?api_key=${API_KEY}&language=${LANGUAGE}&query=${searchQuery}&page=1&include_adult=false`
  );
  if (response.statusText) {
    throw new Error(response.statusText);
  }
  return response.data;
}

export async function fetchMovie(movie_id) {
  const response = await axios.get(
    `${API_PATH}/movie/${movie_id}?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  if (response.statusText) {
    throw new Error(response.statusText);
  }
  return response.data;
}

export async function fetchReview(movie_id) {
  const response = await axios.get(
    `${API_PATH}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
  );
  if (response.statusText) {
    throw new Error(response.statusText);
  }
  return response.data;
}

export async function fetchCast(movie_id) {
  const response = await axios.get(
    `${API_PATH}/movie/${movie_id}/credits?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  if (response.statusText) {
    throw new Error(response.statusText);
  }
  return response.data;
}
