import { Link } from 'react-router-dom';
import { ItemDescription } from './ItemDescription';
import { StyledMovieItem, StyledMoviePoster } from './MovieItem.styles';

export interface MovieInterface {
  imgurl?: string;
  title?: string;
  rating?: number;
  releaseDate: string | number | Date;
  movieID?: number;
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
        <StyledMoviePoster
          src={`https://image.tmdb.org/t/p/original${imgurl}`}
          alt={title}
        />
        <ItemDescription
          title={title}
          rating={rating}
          releaseDate={releaseDate}
        />
      </StyledMovieItem>
    </Link>
  );
};
