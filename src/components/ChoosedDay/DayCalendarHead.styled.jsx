import { styled } from "styled-components";

export const ContainerColendar = styled.div`
  max-width: 1087px;
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 10px 46px;

  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #fff;
`;
export const ListData = styled.ul`
  display:flex;
  justify-content:space-between; 
`;
export const ContainerData = styled.div`


`;
export const DataItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
export const DayText = styled.span`
  font-family: InterSemiBold;
  color: #343434;  
  font-size: 14px;  
  line-height: 18px; /* 128.571% */
  text-transform: uppercase;
`;

export const DataNumber=styled.span`
    
`