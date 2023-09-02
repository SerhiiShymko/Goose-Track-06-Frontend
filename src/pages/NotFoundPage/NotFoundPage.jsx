import {
  BtnError,
  TextError,
  ErrorBox,
  IconError,
  TextBox,
  ErrorNumber,
  IconBox,
} from './NotFoundPage.styled';
const NotFoundPage = () => {
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
      <BtnError to="/">Back to Home</BtnError>
    </ErrorBox>
  );
};

export default NotFoundPage;
