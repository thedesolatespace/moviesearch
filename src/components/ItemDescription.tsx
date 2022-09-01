import {
  StyledItemDescription,
  StyleditemRating,
  StyledItemTitle,
  StyledReleaseDate,
} from './ItemDescription.styles';
import { MovieInterface } from './MovieItem';

export const ItemDescription = ({
  title,
  rating,
  releaseDate,
}: MovieInterface) => {
  return (
    <StyledItemDescription>
      <StyledReleaseDate>
        {releaseDate ? new Date(releaseDate).getFullYear() : 'Unknown'}
      </StyledReleaseDate>
      <StyledItemTitle>{title}</StyledItemTitle>
      <StyleditemRating>{rating}</StyleditemRating>
    </StyledItemDescription>
  );
};
