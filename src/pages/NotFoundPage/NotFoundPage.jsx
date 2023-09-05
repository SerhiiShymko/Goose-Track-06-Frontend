import { useSelector } from 'react-redux';
import {
  BtnError,
  TextError,
  ErrorBox,
  IconError,
  TextBox,
  ErrorNumber,
  IconBox,
} from './NotFoundPage.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
const NotFoundPage = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <ErrorBox>
      <IconBox>
        <ErrorNumber>4</ErrorNumber>
        <IconError />
        <ErrorNumber>4</ErrorNumber>
      </IconBox>
      <TextBox>
        <TextError>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </TextError>
      </TextBox>
      {isLogin ? (
        <BtnError to="/calendar">Back to Home</BtnError>
      ) : (
        <BtnError to="/login">Back to Home</BtnError>
      )}
    </ErrorBox>
  );
};

export default NotFoundPage;
