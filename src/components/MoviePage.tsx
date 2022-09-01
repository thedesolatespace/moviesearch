import { useLocation } from 'react-router-dom';
import { useGetMoviePageQuery } from '../store/services/MovieAPI';
import { StyledMoviePage } from './MoviePage.styles';
import { MoviePageDescription } from './MoviePageDescription';
import { MoviePoster } from './MoviePoster';

export const MoviePage = () => {
  const location = useLocation();
  const { data, isLoading } = useGetMoviePageQuery(location.pathname);
  if (isLoading) {
    return (
      <StyledMoviePage>
        <h1>loading</h1>
      </StyledMoviePage>
    );
  }
  if (data?.id) {
    return (
      <StyledMoviePage>
        <MoviePageDescription
          releaseDate={data.release_date}
          rating={data.vote_average}
          title={data.title}
          overview={data.overview}
        />
        <MoviePoster imgurl={data.poster_path} title={data.title} />
      </StyledMoviePage>
    );
  }
  return (
    <StyledMoviePage>
      <h1>Nothing here</h1>
    </StyledMoviePage>
  );
};
