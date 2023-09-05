import styled from 'styled-components';

import { ReactComponent as BurgerSvgStyled } from '../../images/header/icon-menu-burger.svg';
import { ReactComponent as ThemeMoonSvgStyled } from '../../images/theme/moon.svg';
import { ReactComponent as ThemeSunSvgStyled } from '../../images/theme/sun.svg';
import { ReactComponent as UserPhotoHeaderSvgStyled } from '../../images/profile/phAvatar.svg';

export const ContentWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CurrentPage = styled.p`
  width: 183px;
  color: ${({ theme }) => theme.colors.colorAccent};
  text-shadow: 0px 9.4px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
`;

export const SideBarBtn = styled.button`
  background-color: inherit;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BurgerIcon = styled(BurgerSvgStyled)`
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.colors.colorBody};

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;

export const FeedbackBtn = styled.button`
  padding: 8px 20px;

  color: #ffffff;
  background-color: #3e85f3;

  border: none;
  border-radius: 10px;

  line-height: 1.3;
  font-weight: 600;

  margin-left: 68px;
  margin-right: 17px;

  @media screen and (min-width: 768px) {
    padding: 12px 32px;
    line-height: 1.28;

    border-radius: 14px;

    margin-right: 24px;
    margin-left: 356px;
  }
`;

export const ThemeTogglerBtn = styled.button`
  background-color: inherit;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    margin-right: 14px;
  }
`;

export const ThemeMoonIcon = styled(ThemeMoonSvgStyled)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const ThemeSunIcon = styled(ThemeSunSvgStyled)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.p`
  margin-right: 8px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.colorBody};
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    line-height: 1;
    margin-right: 14px;
  }
`;

export const UserPhotoHeaderWrapper = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid #3e85f3;
  border-radius: 16px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;

    border-radius: 22px;
  }
`;

export const UserPhotoHeader = styled(UserPhotoHeaderSvgStyled)`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  padding: 5px;
  background: lightgray 50% / cover no-repeat;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
