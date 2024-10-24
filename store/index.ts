// src/app/store.js
import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {api} from './movies/api';
import moviesSlice from './movies/moviesSlice';

export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: {
    // Add the RTK Query reducer to the store
    [api.reducerPath]: api.reducer,
    movie: moviesSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

// optional, but it enables refetchOnFocus and refetchOnReconnect behaviors
setupListeners(store.dispatch);
