import { styled } from "styled-components";

export const PopperList = styled.ul`
  display:flex;
  padding: 20px 24px;
  flex-direction:column;
  gap:14px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
`;

export const PopperItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:8px;
`;

export const PopperText = styled.span`
  font-family: InterMedium;
  color: #343434;  
  font-size: 14px; 
  line-height: 18px; /* 128.571% */
`;
