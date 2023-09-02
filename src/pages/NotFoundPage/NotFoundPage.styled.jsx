import styled from 'styled-components';
import { ReactComponent as ErrorIcon } from '../../images/404/404-goose.svg';
import { NavLink } from 'react-router-dom';
// ----------------------------------------------------------------------------

export const ErrorBox = styled.div`
  position: relative;
  text-align: center;
  padding: 264px 61px 246px;

  background-color: #f7f6f9;
  @media (min-width: 375px) {
  }
  @media (min-width: 768px) {
    padding: 320px 133px 247px;
  }
  @media (min-width: 1440px) {
    padding: 262px 468px 184px;
  }
`;
// ----------------------------------------------------------------------------

export const IconError = styled(ErrorIcon)`
  width: 100px;
  height: 150px;
  @media (min-width: 375px) {
    position: absolute;
    width: 150px;
    height: 188px;
    ${
      '' /* width: 252px;
    height: 150px; */
    }
  }
  @media (min-width: 768px) {
    width: 240px;
    height: 414px;
  }
  @media (min-width: 1440px) {
  }
`;
// ----------------------------------------------------------------------------

export const TextError = styled.p`
  color: rgba(17, 17, 17, 0.7);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;
// ----------------------------------------------------------------------------

export const BtnError = styled(NavLink)`
  ${'' /* display: block; */}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 153px;
  height: 46px;
  border-radius: 16px;
  color: #ffffff;
  background-color: #3e85f3;
  margin: auto;
  @media (min-width: 375px) {
  }
  @media (min-width: 768px) {
    width: 211px;
    height: 56px;
  }
  @media (min-width: 1440px) {
  }
`;
// ----------------------------------------------------------------------------

export const TextBox = styled.div`
  margin: 0px;
  margin-bottom: 24px;
  display: inline-block;

  @media (min-width: 375px) {
  }
  @media (min-width: 768px) {
    width: 387px;

    margin-bottom: 32px;
  }
  @media (min-width: 1150px) {
    display: block;
    margin: auto;
    margin-bottom: 32px;
  }
`;

// ----------------------------------------------------------------------------

export const ErrorNumber = styled.h1`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-weight: 700;
  line-height: 150px;
  font-size: 70px;

  @media (min-width: 375px) {
    font-size: 100px;
  }
  @media (min-width: 768px) {
    font-size: 140px;
  }
  @media (min-width: 1440px) {
  }
`;
// ----------------------------------------------------------------------------

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 375px) {
    display: inline-flex;
    width: 280px;
    height: 120px;
    margin: 0px 0px 28px 0px;
    justify-content: space-around;
    align-items: center;
  }
  @media (min-width: 768px) {
    width: 503px;
    height: 250px;
  }
`;
