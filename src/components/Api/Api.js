import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '0bf4740b0505867b66253771331711d6';

export const fetchTrends = async () => {
  const { data } = await axios.get(
    `${API_URL}trending/movie/day?api_key=${API_KEY}&page=1`
  );

  return data.results;
};

export async function fetchSearch(query) {
  const { data } = await axios.get(
    `${API_URL}search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1`
  );
  return data.results;
}

export const fetchMovieDetails = async id => {
  const { data } = await axios.get(
    `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchMovieCast = async id => {
  const { data } = await axios.get(
    `${API_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(
    `${API_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );
  return data.results;
};
