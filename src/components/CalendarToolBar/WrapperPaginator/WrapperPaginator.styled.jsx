import { styled } from 'styled-components';
// import Prev from '../../../images/calendar/chevron-left.svg'

export const WrapperPagination = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: start;
  }
`;
export const ButtonForOpenCalendar = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  background: #3e85f3;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.28; /* 128.571% */
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
    line-height: 1.12;
  }
`;

export const PeriodPaginator = styled.div`
  display: flex;
  width: 76px;
  height: 34px;

  @media screen and (min-width: 768px) {
    margin-left: 8px;
  }
`;

export const BtnPaginatorLeft = styled.button`
  cursor: pointer;
  padding: 7px 10px;
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-right: calc(1 / 2) px;
  background: #fff;

  @media screen and (min-width: 768px;) {
    padding: 8px 10px;
  }
`;

export const BtnPaginatorRight = styled.button`
  cursor: pointer;
  padding: 7px 10px;
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-left: calc(1 / 2) px;
  background: #fff;

  @media screen and (min-width: 768px;) {
    padding: 8px 10px;
  }
`;
