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
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const Header = ({ handleClick }) => {
  const currentUserInfo = useSelector(selectUser);
  const splitName = currentUserInfo.name.split(' ');

  return (
    <Container>
      <ContentWrapper>
        <button type="button" onClick={handleClick}>
          <BurgerIcon />
        </button>
        <UserWrapper>
          <FeedbackBtn type="button">Feedback</FeedbackBtn>
          <ThemeTogglerIcon />
          <UserName>{splitName[0]} </UserName>
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
