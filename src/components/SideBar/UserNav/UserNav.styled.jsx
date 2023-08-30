import styled from 'styled-components';
import { NavLink as NavLinkForStyle } from 'react-router-dom';

import { ReactComponent as CloseSvgStyled } from 'images/sideBar/x-close.svg';
import { ReactComponent as UserSvgStyled } from 'images/sideBar/user-check.svg';
import { ReactComponent as CalendarSvgStyled } from 'images/sideBar/calendar-check.svg';
import { ReactComponent as StatisticsSvgStyled } from 'images/sideBar/statistics.svg';

import goose_phone from 'images/sideBar/goose_phone.png';
import goose_phone2x from 'images/sideBar/goose_phone@2x.png';
import goose_tablet from 'images/sideBar/goose_tablet.png';
import goose_tablet2x from 'images/sideBar/goose_tablet@2x.png';
import goose_desktop from 'images/sideBar/goose_desktop.png';
import goose_desktop2x from 'images/sideBar/goose_desktop@2x.png';

export const Wrapper = styled.div`
  margin-bottom: auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;
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
  text-shadow: 0px 9.4px 57.6875px rgba(0, 0, 0, 0.04),
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

export const ButtonClose = styled.button`
  background-color: #ffffff;
`;

export const NavigationBlock = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;

  color: rgba(52, 52, 52, 0.5);
`;

export const NavigationLegend = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 6px;
`;

const stylesForNavIcons = {
  width: '20px',
  height: '20px',
  marginRight: '8px',
  stroke: 'currentColor',
};

export const UserSvg = styled(UserSvgStyled)`
  ${stylesForNavIcons}
`;
export const CalendarSvg = styled(CalendarSvgStyled)`
  ${stylesForNavIcons}
`;
export const StatisticsSvg = styled(StatisticsSvgStyled)`
  ${stylesForNavIcons}
`;

export const NavLink = styled(NavLinkForStyle)`
  display: flex;
  padding: 10px 12px;
  align-items: center;
  border-radius: 8px;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &.active,
  &:hover,
  &:focus {
    color: #3e85f3;
    background-color: #e3f3ff;
  }
`;
