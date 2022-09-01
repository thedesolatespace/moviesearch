import { MovieInterface } from './MovieItem';
import { StyledMoviePageDescription } from './MoviePageDescription.styles';

export const MoviePageDescription = ({
  rating,
  releaseDate,
  title,
  overview,
}: MovieInterface) => {
  return (
    <StyledMoviePageDescription>
      <p>{title}</p>
      <p>{overview}</p>
      <div>
        <p>Rating: {rating?.toFixed()}</p>
        <p>
          Date of release:{' '}
          {releaseDate ? new Date(releaseDate).toLocaleDateString() : 'Unknown'}{' '}
        </p>
      </div>
    </StyledMoviePageDescription>
  );
};
