import { styled } from 'styled-components';

export const ContainerColendar = styled.div`
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.colorCalendarBorder};
  background: ${({ theme }) => theme.colors.backgroundSubcomponents};

  @media screen and (max-width: 1439px) {
    padding: 10px 32px;
    width: 704px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    padding: 14px 18px;
  }
  @media screen and (min-width: 1440px) {
    padding: 10px 46px;
    width: 1087px;
  }
`;
export const ListData = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const ContainerData = styled.div``;
export const DataItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
export const DayText = styled.span`
  /* font-family: InterSemiBold; */
  font-weight: 600;
  color: ${({ theme }) =>
    theme.name === 'light'
      ? theme.colors.colorBody
      : 'rgba(250, 250, 250, 0.3)'};
  font-size: 14px;
  line-height: 18px; /* 128.571% */
  text-transform: uppercase;
  @media screen and (max-width: 769px) {
    font-size: 16px;
  }
`;

export const DataNumber = styled.span`
  background: ${props => props.$background};
  color: ${props => props.$color};
  padding: 4px 8px;
  border-radius: 16px;
  /* font-family: interbold; */
  font-weight: 700;
  font-size: 16px;
  line-height: 18px; /* 112.5% */

  @media screen and (max-width: 769px) {
    line-height: 14px;
    font-size: 12px;
  }
`;
