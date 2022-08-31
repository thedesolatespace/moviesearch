import { useLocation } from 'react-router-dom';
import { useGetMoviePageQuery } from '../store/services/MovieAPI';
import { StyledMoviePoster } from './MovieItem.styles';
import { StyledMoviePage, StyledPoster } from './MoviePage.styles';

export const MoviePage = () => {
  const location = useLocation();
  const { data, isLoading } = useGetMoviePageQuery(location.pathname);
  if (isLoading) {
    return <h1>loading</h1>;
  }
  if (data?.id) {
    return (
      <StyledMoviePage>
        <h1>{data.title}</h1>
        <StyledPoster>
          <StyledMoviePoster
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt={data.title}
          />
        </StyledPoster>
        <p>{data.overview}</p>
        <p>Rating: {data.vote_average}</p>
      </StyledMoviePage>
    );
  } else {
    return <h1>Nothing here</h1>;
  }
};
