import React from 'react';
import { Formik } from 'formik';
import { validateSchema } from './authSchema';
import { AuthForm, Box, NavLinkStyled } from './LoginForm.styled';
import {
  AuthInput,
  AuthLabel,
  Text,
  FormTitle,
  FormText,
  SubmitButton,
  IconForm,
  ErrorIcon,
  SuccesIcon,
} from '../RegisterForm/RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
//
export const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <Box>
      <Formik
        initialValues={{
          email: '',
          password: ``,
        }}
        validationSchema={validateSchema}
        onSubmit={(values, { resetForm }) => {
          //console.log(values);
          dispatch(logIn(values));
          resetForm();
        }}
      >
        {({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <AuthForm>
            <FormTitle>Log In</FormTitle>
            {touched.email && errors.email ? (
              <AuthLabel>
                <FormText color={'#DA1414'}>Email</FormText>
                <AuthInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  border={'1px solid #DA1414'}
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  marginbottom={`8px`}
                />
                <ErrorIcon />

                <Text color="#DA1414">{errors.email}</Text>
              </AuthLabel>
            ) : (
              <AuthLabel>
                <FormText
                  color={
                    values.email !== `` && !errors.email
                      ? ' #3CBC81'
                      : undefined
                  }
                >
                  Email
                </FormText>
                <AuthInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="text"
                  name="email"
                  border={
                    values.email !== `` && !errors.email
                      ? '1px solid #3CBC81'
                      : undefined
                  }
                  placeholder="Enter email"
                />
                {values.email !== `` && !errors.email && <SuccesIcon />}
              </AuthLabel>
            )}
            {touched.password && errors.password ? (
              <AuthLabel>
                <FormText color={'#DA1414'}>Password</FormText>
                <AuthInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  border={'1px solid #DA1414'}
                  type="text"
                  name="password"
                  placeholder="Enter password"
                  marginbottom={`8px`}
                />
                <ErrorIcon />
                <Text color="#DA1414">{errors.password}</Text>
              </AuthLabel>
            ) : (
              <AuthLabel>
                <FormText
                  color={
                    values.password !== `` && !errors.password
                      ? ' #3CBC81'
                      : undefined
                  }
                >
                  Password
                </FormText>
                <AuthInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type="text"
                  name="password"
                  marginbottom={`32px`}
                  border={
                    values.password !== `` && !errors.password
                      ? ' 1px solid #3CBC81'
                      : undefined
                  }
                  placeholder="Enter password"
                />
                {values.password !== `` && !errors.password && <SuccesIcon />}
              </AuthLabel>
            )}
            <SubmitButton type="submit" onClick={handleSubmit}>
              Log In <IconForm />
            </SubmitButton>
          </AuthForm>
        )}
      </Formik>
      <NavLinkStyled to="/register">Sign Up</NavLinkStyled>
    </Box>
  );
};
