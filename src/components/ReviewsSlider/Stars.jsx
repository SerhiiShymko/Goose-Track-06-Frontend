import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { StyledStars } from './ReviewsSlider.styled';

export const Stars = ({ rating }) => {
  const maxRating = 5;
  const stars = [];

  for (let i = 0; i < maxRating; i++) {
    const color = i < rating ? '#FFAC33' : '#CEC9C1';
    stars.push(<FontAwesomeIcon icon={faStar} key={i} style={{ color }} />);
  }

  return <StyledStars>{stars}</StyledStars>;
};
