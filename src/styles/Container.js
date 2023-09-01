import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  padding: 24px 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 24px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
