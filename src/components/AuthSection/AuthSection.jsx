import React from 'react';

import goose from '../../images/mainPage/GOOSE_LOGO.svg';
import loginsvg from '../../images/mainPage/login.svg';

import {
  ButtonWrapper,
  Header,
  LogInBtn,
  LoginSvg,
  LogoImg,
  MainTitle,
  SignUpBtn,
} from './AuthSection.styled';

const AuthSection = () => {
  return (
    <Header>
      <LogoImg src={goose} alt="goose_logo" />
      <MainTitle>
        Go<span style={{ fontFamily: 'InterBoldItalic' }}>o</span>seTrack
      </MainTitle>
      <ButtonWrapper>
        <SignUpBtn to="/register">Sign up</SignUpBtn>
        <LogInBtn to="/login">
          Log in
          <LoginSvg src={loginsvg} alt="loginsvg" />
        </LogInBtn>
      </ButtonWrapper>
    </Header>
  );
};

export default AuthSection;
