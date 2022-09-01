import { StarterPage } from '../store/services/MovieAPI';
import { MovieItem } from './MovieItem';
import { StyledMovieList } from './MoviesList.styles';

export const MoviesList = ({ results }: StarterPage) => {
  return (
    <StyledMovieList>
      {results?.length ? (
        results?.map((movie) => (
          <MovieItem
            movieID={movie.id}
            title={movie.title}
            imgurl={movie.poster_path}
            key={movie.id}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
          />
        ))
      ) : (
        <p>Nothing found</p>
      )}
    </StyledMovieList>
  );
};
