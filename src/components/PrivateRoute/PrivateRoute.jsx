import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

export const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  // console.log('isLoggedIn', isLoggedIn);
  // console.log('isRefreshing', isRefreshing);
  // console.log('shouldRedirect', shouldRedirect);
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : component;
};
