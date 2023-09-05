import styled from 'styled-components';
import { ReactComponent as LogoutSvgForStyle } from 'images/sideBar/log-out.svg';

export const LogoutSvg = styled(LogoutSvgForStyle)`
  width: 18px;
  height: 18px;
  margin-left: 6px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin-left: 11px;
  }

  stroke: currentColor;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 131px;
  padding: 14px 28px;
cursor: pointer;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28571;
  letter-spacing: -0.28px;
  border-radius: 16px;
  background: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  @media screen and (min-width: 768px) {
    width: 141px;
    padding: 16px 23px;
    font-size: 18px;
    line-height: 1.3333;
    letter-spacing: -0.36px;
  }
`;
