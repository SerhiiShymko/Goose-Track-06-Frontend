import styled from 'styled-components';

export const ContainerSideBar = styled.div`
  display: flex;
  flex-direction: column;

  width: 225px;
  padding: 24px 20px;

  background: #fff;

  @media screen and (min-width: 768px) {
    width: 289px;
    padding: 24px 32px;
  }
  @media screen and (max-width: 1439.99px) {
    /* width: 289px;
    padding: 24px 32px; */
  }
`;
