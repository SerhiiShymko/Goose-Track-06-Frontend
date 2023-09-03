import { Suspense } from 'react';
import { Container } from 'styles/Container';

import {
  ContentWrapper,
  BurgerIcon,
  UserName,
  UserWrapper,
  UserPhotoHeader,
  ThemeMoonIcon,
  ThemeSunIcon,
} from './Header.styled';
import Spinner from 'components/Spinner/Spinner';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme, selectUser } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { setTheme } from 'redux/auth/authSlice';
import AddFeedbackBtn from 'components/AddFeedbackBtn/AddFeedbackBtn';

const Header = ({ handleClick }) => {
  const currentUserInfo = useSelector(selectUser);
  const splitName = currentUserInfo.name.split(' ');
  const themeName = useSelector(selectTheme);

  const dispatch = useDispatch();

  const toggleTheme = () =>
    themeName === 'light'
      ? dispatch(setTheme('dark'))
      : dispatch(setTheme('light'));

  return (
    <Container>
      <ContentWrapper>
        <button type="button" onClick={handleClick}>
          <BurgerIcon />
        </button>
        <UserWrapper>
          <AddFeedbackBtn />
          <button type="button" onClick={toggleTheme}>
            {themeName === 'light' ? <ThemeMoonIcon /> : <ThemeSunIcon />}
          </button>
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
