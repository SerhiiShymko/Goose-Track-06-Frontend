import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// ----------------------------------------------------------------------------

export const NavLinkStyled = styled(NavLink)`
  display: block;
  margin-top: 24px;
  color: #3e85f3;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  &:hover {
    color: #2b78ef;
  }
  &.active {
    color: white;
  }
`;
// ----------------------------------------------------------------------------

export const AuthForm = styled.form`
  // -------забрати
  outline: 1px solid #3e85f3;
  // -------забрати

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
`;
