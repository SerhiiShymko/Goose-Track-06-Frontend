import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const MonthCalendarHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  margin-top: 24px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background-color: ${({ theme }) => theme.colors.backgroundSubcomponents};

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    padding: 14px 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px 60px;
  }
`;
export const Day = styled.span`
  color: ${({ theme }) => theme.colors.colorBody};
  /* font-family: Inter; */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.12px; /* 112.5% */
  text-transform: uppercase;
`;

export const DayHolidays = styled.span`
  color: #3e85f3;
  /* font-family: Inter; */
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
  grid-template-rows: repeat(${props => props.$columnsCount}, 94px);
  /* grid-row-gap: 1px; */
  /* grid-column-gap: 1px; */

  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background: ${({ theme }) => theme.colors.backgroundSubcomponents};
  color: ${({ theme }) => theme.colors.colorBody};
  /* font-family: Inter; */
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2; /* 116.667% */
  /* text-transform: uppercase; */

  @media screen and (min-width: 768px) {
    margin-top: 18px;
    grid-template-rows: repeat(${props => props.$columnsCount}, 144px);
    font-size: 16px;
    line-height: 1.12;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 15px;
    grid-template-rows: repeat(${props => props.$columnsCount}, 125px);
  }
`;

export const EmptyDateBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSubcomponents};
  border: solid ${({ theme }) => theme.colors.colorCalendarBorder};
  border-width: 0.5px;
`;
export const DateCalendarMonth = styled(NavLink)`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.backgroundSubcomponents};
  /* display: flex;
  flex-direction: column; */
  /* justify-content: end; */
  padding: 8px 2px;
  border: solid ${({ theme }) => theme.colors.colorCalendarBorder};
  border-width: 0.5px;

  @media screen and (min-width: 768px) {
    padding: 14px 4px;
  }
  @media screen and (min-width: 1440px) {
    padding: 14px 8px;
  }
`;

export const DayOfMonth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  margin-left: auto;
  margin-right: 2px;
  margin-bottom: 18px;
  width: 20px;
  height: 22px;
  border-radius: 6px;
  color: ${props => (props.$active ? '#fff' : 'inherit')};
  background-color: ${props => (props.$active ? '#3e85f3' : 'inherit')};

  @media screen and (min-width: 768px) {
    width: 27px;
    height: 26px;
    margin-right: 10px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 6px;
  }
`;

// export const DateNoSelected = styled.div`
//   display: flex;
//   padding: 4px 8px;
//   justify-content: center;
//   align-items: center;
//   width: 20px;
//   height: 22px;

//   @media screen and (min-width: 768px) {
//     width: 27px;
//     height: 26px;
//   }
// `;
