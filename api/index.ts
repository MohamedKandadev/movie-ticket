import sizes from '../constants/sizes';

export const apikey: string = '3f7069e587c930bd7346a956540f518a';
export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
export const upComingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`;
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;
export const searchMovies = (query: string): string =>
  `https://api.themoviedb.org/3/search/movie?api_key=${query}&query=${query}`;
export const movieDetails = (id: number): string =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;
export const movieCastDetails = (id: number): string =>
  `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`;

export const baseImagePath = (size: string, path: string): string =>
  `https://image.tmdb.org/t/p/${size}/${path}`;
