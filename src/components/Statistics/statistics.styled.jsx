import styled from 'styled-components';

export const WrapperChart = styled.div`
  display: flex;
  align-items: center;
  width: 307px;
  height: 413px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 20px;
  border: solid 2px #e3f3ff;

  @media screen and (min-width: 768px) {
    width: 640px;
    height: 424px;
    padding: 24px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 860px;
    height: 440px;
  }
`;

export const StatisticWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 64px;
  justify-content: center;
  width: 335px;
  height: 684px;
  padding: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.backgroundSubcomponents};


  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 754px;
    padding: 24px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
    height: 752px;
  }
`;
