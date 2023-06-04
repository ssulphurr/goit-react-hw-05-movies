const API_KEY = '453b881a671dd013b145c543ca73b9df';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrending = () => {
  return fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
};

export const fetchMovies = query => {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
};

export const fetchMovieDetails = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
};

export const fetchCast = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`);
};

export const fetchReviews = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`);
};
