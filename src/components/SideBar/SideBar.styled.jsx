import styled from 'styled-components';

export const ContainerSideBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  width: 225px;
  padding: 24px 20px;

  background: #ffffff;

  @media screen and (min-width: 768px) {
    width: 289px;
    padding: 24px 32px;
  }
  @media screen and (max-width: 1439px) {
    position: absolute;
    z-index: 10;
    &.shown {
      transform: translateX(0%);
      opacity: 1;
    }

    &.hidden {
      transform: translateX(-100%);
      opacity: 0;
    }
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
