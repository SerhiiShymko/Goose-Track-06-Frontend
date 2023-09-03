import styled from 'styled-components';

export const WrapperChart = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 860px;
  height: 440px;
  border-radius: 16px;
  border-radius: 29px;
  border: solid 1px #e3f3ff;
  background-color: ${({ theme }) => theme.colors.backgroundSubcomponents};
`;
