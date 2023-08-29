import { Suspense, lazy } from 'react';
// import { refresh } from 'redux/auth/operations';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectToken } from 'redux/auth/selectors';

import { Container } from 'styles/Container';
import Spinner from './Spinner/Spinner';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
// const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
// const StatisticsPage = lazy(() =>
//   import('pages/StatisticsPage/StatisticsPage')
// );

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
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="calendar" element={<CalendarPage/>} /> 

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
