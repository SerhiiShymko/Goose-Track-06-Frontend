import styled from 'styled-components';

export const ContainerSideBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 104vh;

  width: 225px;
  padding: 24px 20px;

  background: ${({ theme }) => theme.colors.backgroundSideBar};

  @media screen and (min-width: 768px) {
    width: 289px;
    padding: 24px 32px;
    height: 104vh;
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
  @media screen and (min-width: 1440px) {
    height: 108vh;
  }
`;
