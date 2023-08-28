// import { lazy, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectToken } from 'redux/auth/selectors';
import { Container } from 'styles/Container';
import UserProfile from './UserProfile/UserProfile';
import Header from './Header/Header';

// const MainPage = lazy(() => import('pages/MainPage/MainPage'));
// const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
// const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
// const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
// const StatisticsPage = lazy(() =>
//   import('pages/StatisticsPage/StatisticsPage')
// );

export const App = () => {
  // const dispatch = useDispatch();
  // const token = useSelector(selectToken);

  // useEffect(() => {
  //   dispatch(refresh());
  // }, [dispatch, token]);

  return (
    <Container>
      <Header/>
     <UserProfile/>
    </Container>
  );
};
