import styled from 'styled-components';

export const ContainerSideBar = styled.div.attrs()`
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
    &.anime {
      transition: transform 250ms linear, opacity 250ms linear,
        background-color 250ms linear;
    }
    &.show {
      transform: translateX(0%);
      opacity: 1;
    }

    &.hide {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
`;
