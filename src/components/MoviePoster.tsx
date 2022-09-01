import { MovieInterface } from './MovieItem';
import { StyledMoviePoster } from './MoviePoster.styles';

export const MoviePoster = ({ imgurl, title }: MovieInterface) => {
  return (
    <StyledMoviePoster
      src={`https://image.tmdb.org/t/p/original${imgurl}`}
      alt={title}
    />
  );
};
