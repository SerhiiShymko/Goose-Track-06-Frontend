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
  SideBarBtn,
  CurrentPage,
  ThemeTogglerBtn,
} from './Header.styled';
import Spinner from 'components/Spinner/Spinner';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme, selectUser } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { setTheme } from 'redux/auth/authSlice';
import AddFeedbackBtn from 'components/AddFeedbackBtn/AddFeedbackBtn';

const Header =  ({ handleClick }) => {
  const currentUserInfo = useSelector(selectUser);
  const splitName = currentUserInfo.name.split(' ');
  const themeName = useSelector(selectTheme);

  const dispatch = useDispatch();

  const toggleTheme = () =>
    themeName === 'light'
      ? dispatch(setTheme('dark'))
      : dispatch(setTheme('light'));

  const location = useLocation();
  const getTextForCurrentPage = () => {
    if (location.pathname.includes('account')) return 'User Profile';
    if (location.pathname.includes('calendar')) return 'Calendar';
    if (location.pathname.includes('statistics')) return 'Statistics';
  };

  return (
    <Container>
      <ContentWrapper>
        {window.innerWidth <= 1440 && (
          <SideBarBtn type="button" onClick={handleClick}>
            <BurgerIcon />
          </SideBarBtn>
        )}

        {window.innerWidth >= 1440 ? (
          <CurrentPage>{getTextForCurrentPage()}</CurrentPage>
        ) : null}
        <UserWrapper>
          <AddFeedbackBtn />
          <ThemeTogglerBtn type="button" onClick={toggleTheme}>
            {themeName === 'light' ? <ThemeMoonIcon /> : <ThemeSunIcon />}
          </ThemeTogglerBtn>
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
