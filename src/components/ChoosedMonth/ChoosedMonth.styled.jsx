import { styled } from 'styled-components';

export const MonthCalendarHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  margin-top: 24px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background: #fff;
`;
export const Day = styled.span`
  color: #343434;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.12px; /* 112.5% */
  text-transform: uppercase;
`;

export const DayHolidays = styled.span`
  color: #3e85f3;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.12px; /* 112.5% */
  text-transform: uppercase;
`;
export const CalendarTable = styled.div`
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 94px);
  grid-row-gap: 1px;
  grid-column-gap: 1px;

  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background: rgba(220, 227, 229, 0.5);
  color: #343434;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2; /* 116.667% */
  text-transform: uppercase;
`;

export const DateCalendarMonth = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: end;
  padding-top: 8px;
  padding-right: 4px;
`;
export const DateActive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 22px;
  border-radius: 6px;
  color: #fff;
  background-color: #3e85f3;
`;

export const DateNoSelected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 22px;
`;
