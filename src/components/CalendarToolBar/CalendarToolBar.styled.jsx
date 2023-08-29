import { styled } from 'styled-components';

export const ModalCalendar = styled.div`
  background-color: #3e85f3;
  width: 327px;
  height: 354px;
  padding: 9px 18px;
  border-radius: 16px;
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
`;

export const DataText = styled.div`
  padding: 4px 0;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
`;

export const WeekDays = styled.div`
  padding: 12px 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px solid rgba(255, 255, 255, 0.20);
`;

export const Day = styled.div`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
`;

export const CalendarTable = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr); 
grid-template-rows: repeat(5, 1fr);
grid-row-gap: 3px;
`
export const CalendarDate = styled.div`
padding: 12px 0;
color: #FFF;
text-align: center;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 128.571% */
`
export const ActiveCalendarDate = styled.div`
padding: 12px 0;
color: #3E85F3;
text-align: center;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.28;
border-radius: 50%;
background-color: #fff;
`