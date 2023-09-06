import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PeriodTypeSelect = styled.div`
  display: flex;
  margin-top: 18px;
  color: #3e85f3;
  text-align: center;
  /* font-family: Inter; */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    font-size: 16px;
    line-height: 1.12;
  }
`;

export const BtnTypeSelectMonth = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 8px 0px 0px 8px;
  border-right: 1px solid rgba(62, 133, 243, 0.2);
  background: ${props => (props.$active === true ? '#cae8ff' : '#e3f3ff')};
  cursor: pointer;
`;
export const BtnTypeSelectDay = styled(NavLink)`
  padding: 8px 25px;
  border-radius: 0px 8px 8px 0px;
  background: ${props => (props.$active === true ? '#cae8ff' : '#e3f3ff')};
  cursor: pointer;
`;
