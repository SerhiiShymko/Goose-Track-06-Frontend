import { styled } from 'styled-components';

export const ModalCalendar = styled.div`
  background-color: #3e85f3;
  width: 327px;
  height: 354px;
  padding: 9px 18px;
  border-radius: 16px;
`;

export const Caption = styled.ul`
  
  padding-inline-start: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
`;

export const ListItem = styled.li`
  width: 18px;
  height: 18px;
  align-self: end;
  cursor: pointer;
`;

export const WeekDays = styled.div`
  display: flex;
  justify-content: space-around;

`;
export const Day = styled.div`
  padding: 12px 16px;

  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
`;

export const LineBlock = styled.div`
width: 328px;
font-size: 1px;
`
