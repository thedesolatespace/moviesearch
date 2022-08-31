import { useDeferredValue } from 'react';
import { StarterPage } from '../store/services/MovieAPI';
import { MovieItem } from './MovieItem';
import { StyledMovieList } from './MoviesList.styles';

export const MoviesList = ({ results }: StarterPage) => {
  const debounce = useDeferredValue(results);
  return (
    <StyledMovieList>
      {debounce.map((movie) => (
        <MovieItem
          movieID={movie.id}
          title={movie.title}
          imgurl={movie.poster_path}
          key={movie.id}
          releaseDate={movie.release_date}
          rating={movie.vote_average}
        />
      ))}
    </StyledMovieList>
  );
};
