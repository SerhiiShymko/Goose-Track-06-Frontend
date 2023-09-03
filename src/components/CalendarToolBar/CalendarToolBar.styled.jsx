import { styled } from 'styled-components';
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

export const ModalCalendar = styled.div`
  position: absolute;
  z-index: 999;
  top: 186px;
  width: 327px;
  height: 354px;
  padding: 9px 18px;
  border-radius: 16px;
  background-color: #3e85f3;

  @media screen and (min-width: 768px) {
    width: 373px;
  }

  @media screen and (min-width: 1440px) {
    top: 153px;
  }
`;

export const Caption = styled.div`
  list-style: none;
  padding-inline-start: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  color: #fff;
`;

export const Button = styled.button`
  align-self: end;
  width: 18px;
  height: 18px;
  padding: 0;
  background-color: inherit;
  outline: none;
  border: 0px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    align-self: center;
  }
`;

export const DataText = styled.div`
  padding: 4px 0;
  text-align: center;
  /* font-family: Inter; */
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.16;
  }
`;

export const WeekDays = styled.div`
  padding: 12px 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Day = styled.div`
  color: #fff;
  text-align: center;
  /* font-family: Inter; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const CalendarTable = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-row-gap: 3px;
`;
export const CalendarDate = styled.div`
  padding: 12px 0;
  color: #fff;
  text-align: center;
  /* font-family: Inter; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.33;
  }
`;
export const ActiveCalendarDate = styled.div`
  padding: 12px 0;
  color: #3e85f3;
  text-align: center;
  /* font-family: Inter; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  border-radius: 50%;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.33;
  }
`;

export const ButtonForOpenCalendar = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  background: #3e85f3;
  color: #fff;
  text-align: center;
  /* font-family: Inter; */
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.28; /* 128.571% */
  text-transform: uppercase;

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
  stroke: #dce3e5;

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

export const BtnTypeSelectMonth = styled.div`
  padding: 8px 16px;
  border-radius: 8px 0px 0px 8px;
  border-right: 1px solid rgba(62, 133, 243, 0.2);
  background: #cae8ff;
`;
export const BtnTypeSelectDay = styled.div`
  padding: 8px 25px;
  border-radius: 0px 8px 8px 0px;
  background: #e3f3ff;
`;

export const WrapperPaginator = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: start;
  }
`;
