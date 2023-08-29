import { styled } from 'styled-components';

export const ModalCalendar = styled.div`
  background-color: #3e85f3;
  max-width: 327px;
  height: 354px;
  padding: 9px 18px;
  border-radius: 16px;
`;

export const Caption = styled.ul`
  list-style: none;
  width: 291px;
  height: 32px;
  padding-inline-start: 0;
  margin: 0 auto;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
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
