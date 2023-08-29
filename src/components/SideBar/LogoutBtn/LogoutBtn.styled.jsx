import styled from 'styled-components';
import { ReactComponent as LogoutSvgForStyle } from 'images/sideBar/log-out.svg';

export const LogoutSvg = styled(LogoutSvgForStyle)`
  width: 18px;
  height: 18px;
  margin-left: 6px;

  stroke: currentColor;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 14px 28px;

  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28571;
  letter-spacing: -0.28px;
  border-radius: 16px;
  background: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
`;
