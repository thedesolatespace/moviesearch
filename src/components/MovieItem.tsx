import { Link } from 'react-router-dom';
import { ItemDescription } from './ItemDescription';
import { StyledMovieItem } from './MovieItem.styles';
import { MoviePoster } from './MoviePoster';

export interface MovieInterface {
  imgurl?: string;
  title?: string;
  rating?: number;
  releaseDate?: string | number | Date;
  movieID?: number;
  overview?: string;
}

export const MovieItem = ({
  imgurl,
  title,
  rating,
  releaseDate,
  movieID,
}: MovieInterface) => {
  return (
    <Link to={`/${movieID}`} state={{ title: title }}>
      <StyledMovieItem>
        <MoviePoster imgurl={imgurl} title={title} />
        <ItemDescription
          title={title}
          rating={rating}
          releaseDate={releaseDate}
        />
      </StyledMovieItem>
    </Link>
  );
};
