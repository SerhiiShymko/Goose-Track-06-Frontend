import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// ----------------------------------------------------------------------------

export const NavLinkStyled = styled(NavLink)`
  display: block;
  text-decoration-line: underline;
  margin-top: 18px;
  color: #3e85f3;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
  &:hover {
    color: #2b78ef;
  }
  &.active {
    color: white;
  }
`;
// ----------------------------------------------------------------------------

export const AuthForm = styled.form`
  padding: 40px 24px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  display: inline-block;
  text-align: start;
  border-radius: 8px;
  background: #fff;

  // ----------------------------------------------------------------------------

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 376px;
    padding: 40px;
  }
  @media screen and (min-width: 768px) {
    width: 480px;
    height: 424px;
  }
`;
// ----------------------------------------------------------------------------

export const Box = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #dcebf7;

  @media screen and (min-width: 375px) {
    padding: 202px 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 276px 144px;
  }
  @media screen and (min-width: 1440px) {
    padding: 174px 480px 124px;
  }
`;
// ----------------------------------------------------------------------------

export const AuthImage = styled.img`
  display: none;
  @media screen and (min-width: 1366px) {
    display: block;
    position: absolute;
    width: 368px;
    height: 521px;
    right: 0%;
    top: 40%;
  }
`;
