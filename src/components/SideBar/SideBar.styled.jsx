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
    transform: ${props =>
      props.open ? 'translateX(0%)' : 'translateX(-100%)'};
    opacity: ${props => (props.open ? '1' : '0')};

    transition: transform 2500ms linear, opacity 2500ms linear;
  }
`;
