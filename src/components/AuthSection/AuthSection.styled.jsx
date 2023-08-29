import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  height: 100vh;
  background-color: #3e85f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LogoImg = styled.img`
  width: 142px;
  height: 142px;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;
export const MainTitle = styled.h1`
  font-family: InterBold;
  font-size: 44px;
  line-height: 1.1;
  margin-bottom: 32px;
  text-align: center;

  color: #ffffff;

  @media (min-width: 765px) {
    font-size: 100px;
    line-height: 1.3;
    margin-bottom: 40px;
  }
  @media (min-width: 1440px) {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  justify-content: space-between;

  @media (min-width: 765px) {
    flex-direction: row;
    gap: 24px;
  }
`;
export const SignUpBtn = styled(Link)`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.16;
  text-decoration: underline;
  color: #ffffff;

  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media (min-width: 767px) {
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const LogInBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;

  border-radius: 16px;
  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;

  color: #3e85f3;
  margin-bottom: 16px;
  padding: 14px 32px;

  @media (min-width: 768px) {
    padding: 14px 22px;
    margin-bottom: 0;
  }
`;

export const LoginSvg = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 6px;
`;
