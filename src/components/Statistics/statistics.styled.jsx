import styled from 'styled-components';

export const WrapperChart = styled.div`
  display: flex;
  align-items: center;
  margin-top: 44px;
  margin-left: auto;
  margin-right: auto;
  width: 307px;
  height: 413px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 20px;
  border: 2px solid #e3f3ff;

  @media screen and (min-width: 768px) {
    width: 640px;
    height: 424px;
    padding: 10px 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    padding: 10px 26px;
  }
`;

export const StatisticWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 28px 14px;
  margin-top: 64px;
  width: 335px;
  height: 684px;
  border-radius: 16px;
  background-color: #fff;
  background-color: ${({ theme }) => theme.colors.backgroundAccent};

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    width: 704px;
    height: 854px;
    padding: 132px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    padding: 134px 113px;
  }
`;

export const Wrapper = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    width: 100%;
    margin-left: 100px;
  }
`;
