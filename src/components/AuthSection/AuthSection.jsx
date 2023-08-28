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
      <MainTitle>GooseTrack</MainTitle>
      <ButtonWrapper>
        <SignUpBtn to="/register">Sign up</SignUpBtn>
        <LogInBtn to="/login">
          Log in
          <LoginSvg>
            <use href={loginsvg} />
          </LoginSvg>
        </LogInBtn>
      </ButtonWrapper>
    </Header>
  );
};

export default AuthSection;
