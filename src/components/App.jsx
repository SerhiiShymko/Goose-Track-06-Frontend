import { Suspense, lazy } from 'react';
// import { refresh } from 'redux/auth/operations';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectToken } from 'redux/auth/selectors';
import { Route, Routes } from 'react-router-dom';

// import { PrivateRoute } from './PrivateRoute/PrivateRoute';
// import { PublicRoute } from './PublicRoute/PublicRoute';

import { Container } from 'styles/Container';
import { GlobalStyle } from '../../src/styles/Global';
import MainLayout from './MainLayout/MainLayout';
import Spinner from './Spinner/Spinner';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
const ChoosedDay = lazy(() => import('./ChoosedDay/ChoosedDay'));
const ChoosedMonth = lazy(() => import('./ChoosedMonth/ChoosedMonth'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const StatisticsPage = lazy(() =>
  import('pages/StatisticsPage/StatisticsPage')
);

export function App() {
  // const dispatch = useDispatch();
  // const token = useSelector(selectToken);

  // useEffect(() => {
  //   dispatch(refresh());
  // }, [dispatch, token]);

  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {/* <Route element={<PublicRoute />}> */}
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          {/* </Route> */}
          {/* <Route path="/" element={<PrivateRoute />}> */}
          <Route path="/" element={<MainLayout />}>
            <Route path="account" element={<AccountPage />} />
            <Route path="calendar" element={<CalendarPage />}>
              <Route path="month/:currentDate" element={<ChoosedMonth />} />
              <Route path="day/:currentDay" element={<ChoosedDay />} />
              {/* </Route> */}
              <Route path="statistics" element={<StatisticsPage />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <GlobalStyle />
    </Container>
  );
}
