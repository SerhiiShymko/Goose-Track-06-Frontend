import { styled } from 'styled-components';

export const PopperList = styled.ul`
  display: flex;
  padding: 20px 24px;
  flex-direction: column;
  gap: 14px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundAccent};
  box-shadow: 0px 4px 16px 0px
    ${({ theme }) =>
      theme.name === 'light'
        ? 'rgba(17, 17, 17, 0.1)'
        : 'rgba(17, 17, 17, 0.10)'};
`;

export const PopperItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const PopperText = styled.span`
  /* font-family: InterMedium; */
  font-weight: 500;
  color: ${({ theme }) => theme.colors.colorBody};
  font-size: 14px;
  line-height: 18px; /* 128.571% */
`;

export const PopperButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
  width: 20px;
  height: 20px;
  padding: 0;
  text-align: center;
`;
export const PopoverButton = styled.div`
  width: 16px;
  height: 16px;
`;
export const ContainerPopover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
