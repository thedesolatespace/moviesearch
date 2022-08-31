import { configureStore } from '@reduxjs/toolkit';
import { movieAPI } from './services/MovieAPI';

export const setupStore = () =>
  configureStore({
    reducer: { [movieAPI.reducerPath]: movieAPI.reducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieAPI.middleware),
  });

export type RootState = ReturnType<typeof movieAPI.reducer>;
export type Appstore = ReturnType<typeof setupStore>;
export type AppDispatch = Appstore['dispatch'];
