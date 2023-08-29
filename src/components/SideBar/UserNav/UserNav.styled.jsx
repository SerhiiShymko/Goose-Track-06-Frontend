import styled from 'styled-components';
import { ReactComponent as CloseSvgStyled } from 'images/sideBar/x-close.svg';

import goose_phone from 'images/sideBar/goose_phone.png';
import goose_phone2x from 'images/sideBar/goose_phone@2x.png';
import goose_tablet from 'images/sideBar/goose_tablet.png';
import goose_tablet2x from 'images/sideBar/goose_tablet@2x.png';
import goose_desktop from 'images/sideBar/goose_desktop.png';
import goose_desktop2x from 'images/sideBar/goose_desktop@2x.png';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  width: 36px;
  height: 35px;
  margin-right: 6px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${goose_phone});
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${goose_phone2x});
  }
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 58px;
    background-image: url(${goose_tablet});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${goose_tablet2x});
    }
  }
  @media screen and (min-width: 1440px) {
    width: 71px;
    height: 68px;
    background-image: url(${goose_desktop});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${goose_desktop2x});
    }
  }
`;

export const LogoText = styled.p`
  margin-right: 25px;
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.375;
`;

export const LogoInnerText = styled.span`
  font-style: italic;
`;

export const CloseSvg = styled(CloseSvgStyled)`
  width: 24px;
  height: 24px;
`;
