import styled from 'styled-components';

import { Container } from 'styles/Container';

export const ContainerSideBar = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background: #fff;
  width: 225px;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: 289px;
  }
`;
