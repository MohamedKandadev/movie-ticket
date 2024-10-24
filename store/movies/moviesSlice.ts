// src/features/userSlice.js
import {createSlice} from '@reduxjs/toolkit';
import {movie} from '../../types/interfaces/data';

const initialState: {nowPlayingMovies: movie[]; popularMovies: movie[]} = {
  nowPlayingMovies: [],
  popularMovies: [],
};
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});

// Export actions for usage in components
export const {setNowPlayingMovies, setPopularMovies} = moviesSlice.actions;

// Export the reducer to be included in the store
export default moviesSlice.reducer;
