import { Suspense } from 'react';
import { Container } from 'styles/Container';

import {
  ContentWrapper,
  BurgerIcon,
  FeedbackBtn,
  ThemeTogglerIcon,
  UserName,
  UserWrapper,
  UserPhotoHeader,
} from './Header.styled';
import Spinner from 'components/Spinner/Spinner';
import { Outlet } from 'react-router-dom';

const Header = ({ handleClick }) => {
  return (
    <Container>
      <ContentWrapper>
        <button type="button" onClick={handleClick}>
          <BurgerIcon />
        </button>
        <UserWrapper>
          <FeedbackBtn type="button">Feedback</FeedbackBtn>
          <ThemeTogglerIcon />
          <UserName>Nadiia</UserName>
          <UserPhotoHeader />
        </UserWrapper>
      </ContentWrapper>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Header;
