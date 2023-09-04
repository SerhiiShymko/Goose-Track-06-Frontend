import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { selectTheme } from 'redux/auth/selectors';
import { ThemeProvider } from 'styled-components';

import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

import Spinner from './Spinner/Spinner';

import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import { DARK, GlobalStyle, LIGHT } from 'styles/Global';
import { Layout } from './Layout';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const MainLayout = lazy(() => import('./MainLayout/MainLayout'));
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
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const themeName = useSelector(selectTheme);
  const theme = themeName === 'light' ? LIGHT : DARK;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Spinner />
  ) : (
    <Suspense fallback={<Spinner />}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={isLoggedIn ? <MainLayout /> : <MainPage />}
            >
              <Route
                path="/"
                element={
                  <PrivateRoute
                    redirectTo="/"
                    component={<Navigate to="/calendar/month/:currentDate" />}
                  />
                }
              />
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
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </Suspense>
  );
}
