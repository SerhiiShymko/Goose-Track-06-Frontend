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
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

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
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Spinner />
  ) : (
    <Container>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="register"
            element={
              <PublicRoute
                redirectTo="/calendar"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/calendar" component={<LoginPage />} />
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/login" component={<MainLayout />} />
            }
          >
            <Route
              path="account"
              element={
                <PrivateRoute redirectTo="/" component={<AccountPage />} />
              }
            />
            <Route
              path="calendar/*"
              element={
                <PrivateRoute redirectTo="/" component={<CalendarPage />} />
              }
            >
              <Route
                path="month/:currentDate"
                element={
                  <PrivateRoute redirectTo="/" component={<ChoosedMonth />} />
                }
              />
              <Route
                path="day/:currentDay"
                element={
                  <PrivateRoute redirectTo="/" component={<ChoosedDay />} />
                }
              />
            </Route>
            <Route
              path="statistics"
              element={
                <PrivateRoute redirectTo="/" component={<StatisticsPage />} />
              }
            />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <GlobalStyle />
    </Container>
  );
}
