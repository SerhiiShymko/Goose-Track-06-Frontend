import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as next } from '../../images/calendar/chevron-right.svg';
import { ReactComponent as prev } from '../../images/calendar/chevron-left.svg';

export const Wrapper = styled.div`
  padding-top: 65px;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 32px;
  }
`;

export const ImgPaginatorNextModal = styled(next)`
  stroke: #fff;
`;

export const ImgPaginatorNext = styled(next)`
  stroke: #343434;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const ImgPaginatorPrev = styled(prev)`
  stroke: #343434;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const PeriodTypeSelect = styled.div`
  display: flex;
  margin-top: 18px;
  color: #3e85f3;
  text-align: center;
  font-family: Inter;
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
  background: #cae8ff;
  cursor: pointer;
`;
export const BtnTypeSelectDay = styled(NavLink)`
  padding: 8px 25px;
  border-radius: 0px 8px 8px 0px;
  background: #e3f3ff;
  cursor: pointer;
`;


