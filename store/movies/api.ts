// src/app/api.js
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {apikey} from '../../api';
import {setNowPlayingMovies, setPopularMovies} from './moviesSlice';
import {movie} from '../../types/interfaces/data';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3/'}),
  endpoints: builder => ({
    getNowPlayingMovies: builder.query<any, void>({
      query: id => `movie/now_playing?api_key=${apikey}`,
      async onQueryStarted(arg, {dispatch, queryFulfilled}) {
        try {
          // Wait for the query to be fulfilled
          const {data} = await queryFulfilled;
          dispatch(setNowPlayingMovies(data?.results));
          // Perform any side effect, e.g., logging or toast notification
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getNowPopularMovies: builder.query<any, void>({
      query: id => `movie/popular?api_key=${apikey}`,
      async onQueryStarted(arg, {dispatch, queryFulfilled}) {
        try {
          // Wait for the query to be fulfilled
          const {data} = await queryFulfilled;
          dispatch(setPopularMovies(data?.results));
          // Perform any side effect, e.g., logging or toast notification
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getMovieDetails: builder.query<movie, string>({
      query: id => `movie/${id}?api_key=${apikey}`,
    }),
    searchMovie: builder.query<any, string>({
      query: search =>
        search.trim() === ''
          ? `movie/popular?api_key=${apikey}`
          : `search/movie?api_key=${apikey}&query=${search}`,
      async onQueryStarted(arg, {dispatch, queryFulfilled}) {
        try {
          // Wait for the query to be fulfilled
          const {data} = await queryFulfilled;
          dispatch(setPopularMovies(data?.results));
          // Perform any side effect, e.g., logging or toast notification
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // Add more endpoints as needed
  }),
});

// Export hooks for usage in functional components
export const {
  useGetNowPlayingMoviesQuery,
  useGetNowPopularMoviesQuery,
  useSearchMovieQuery,
  useGetMovieDetailsQuery,
} = api;
