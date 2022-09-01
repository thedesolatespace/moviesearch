import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export interface MovieDetails {
  id: number;
  poster_path: string;
  release_date: string | number;
  title: string;
  vote_average: number;
  overview?: string;
}

export interface StarterPage {
  page?: number;
  results?: MovieDetails[];
  total_pages?: number;
  total_results?: number;
}

export const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (build) => ({
    getSearchResultPage: build.query<StarterPage, string | void>({
      query: (search = '') =>
        search
          ? `search/movie?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&language=en-US&query=${search}&page=1`
          : `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    }),
    getMoviePage: build.query<MovieDetails, string>({
      query: (id) => `movie${id}?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
});
export const { useGetSearchResultPageQuery, useGetMoviePageQuery } = movieAPI;
