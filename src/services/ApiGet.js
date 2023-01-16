import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const KEY_API = 'api_key=a9e036a3cc325f4f299a8fb09c637fc0';

export const getMoviesTranding = () =>
  axios.get(`${baseURL}/trending/movie/day?${KEY_API}`);

export const gethMoviesSearch = query =>
  axios.get(`${baseURL}/search/movie?${KEY_API}&query=${query}`);

export const getMoviesDetails = id =>
  axios.get(`${baseURL}/movie/${id}?${KEY_API}`);

export const getMoviesCredits = id =>
  axios.get(`${baseURL}/movie/${id}/credits?${KEY_API}`);

export const getReviewsMovies = id =>
  axios.get(`${baseURL}/movie/${id}/reviews?${KEY_API}`);
