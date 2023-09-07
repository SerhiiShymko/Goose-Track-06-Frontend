import { styled } from 'styled-components';
import { ReactComponent as prev } from '../../images/calendar/chevron-left.svg';
import { ReactComponent as next } from '../../images/calendar/chevron-right.svg';

export const ModalCalendar = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 9;
  width: 327px;
  /* height: 354px; */
  padding: 9px 18px;
  border-radius: 16px;
  background-color: #3e85f3;

  @media screen and (min-width: 768px) {
    width: 373px;
  }

  @media screen and (min-width: 1440px) {
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
  grid-template-rows: repeat(${props => props.$columnsCount}, 1fr);
  grid-row-gap: 3px;
`;

export const CalendarDate = styled.div`
  padding: 12px 0;
  color: ${props =>
    props.$typeOfDay === 'active'
      ? '#3e85f3'
      : props.$typeOfDay === 'holiday'
      ? 'rgba(255, 255, 255, 0.25)'
      : '#ffffff'};
  background-color: ${props =>
    props.$typeOfDay === 'active' ? '#ffffff' : 'inherit'};
  border-radius: ${props => (props.$typeOfDay === 'active' ? '50%' : 'none')};
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28571;
  cursor: pointer;
  transition: transform 2500ms ease;

  &:hover,
  &:focus {
    color: darkblue;
    background-color: #ffffff;
    border-radius: 8px;
    transform: scale(1.1);
  }
  &:active {
    color: darkblue;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.33;
  }
`;

export const CalendarDateHolidays = styled.div`
  padding: 12px 0;
  color: rgba(255, 255, 255, 0.25);
  text-align: center;
  /* font-family: Inter; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  cursor: pointer;
  &:hover,
  &:focus {
    color: darkblue;
  }
  &:active {
    color: darkblue;
  }

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
  cursor: pointer;
  &:hover,
  &:focus {
    color: darkblue;
  }
  &:active {
    color: darkblue;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.33;
  }
`;

export const ImgPaginatorPrev = styled(prev)`
  stroke: #fff;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const ImgPaginatorNext = styled(next)`
  stroke: #fff;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
