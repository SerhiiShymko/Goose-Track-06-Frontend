// import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import { Container, FormWrapper } from './RegisterPage.styled';
//
const RegisterPage = () => {
  return (
    <Container>
      <FormWrapper>
        <RegisterForm />
      </FormWrapper>
    </Container>
  );
};

export default RegisterPage;
