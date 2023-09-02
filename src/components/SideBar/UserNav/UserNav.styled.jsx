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
  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
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
  color: ${({ theme }) => theme.colors.colorLogoTextsSideBar};
  text-shadow: 0px 9.4px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.375;
  @media screen and (min-width: 768px) {
    line-height: 1.5;
    margin-right: 31px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 1;
    margin-right: 0px;
  }
`;

export const LogoInnerText = styled.span`
  font-style: italic;
`;

export const CloseSvg = styled(CloseSvgStyled)`
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.colors.colorBody};
  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const ButtonClose = styled.button`
  background-color: inherit;
`;

export const NavigationBlock = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;

  color: ${({ theme }) => theme.colors.colorBtnSideBar};

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const NavigationLegend = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.colorLegendSideBar};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    margin-bottom: 32px;
  }
`;

const stylesForNavIcons = {
  width: '20px',
  height: '20px',
  marginRight: '8px',
  stroke: 'currentColor',
};

export const UserSvg = styled(UserSvgStyled)`
  ${stylesForNavIcons}
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;
export const CalendarSvg = styled(CalendarSvgStyled)`
  ${stylesForNavIcons}
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;
export const StatisticsSvg = styled(StatisticsSvgStyled)`
  ${stylesForNavIcons}
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
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

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 16px 20px;
  }

  &.active,
  &:hover,
  &:focus {
    color: ${({ theme }) =>
      theme.name === 'light' ? '#3e85f3' : theme.colors.colorBody};
    background-color: ${({ theme }) => theme.colors.backgroundBtnSideBarHover};
  }
`;
