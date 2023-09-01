import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container, FormWrapper } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <Container>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
    </Container>
  );
};

export default LoginPage;
