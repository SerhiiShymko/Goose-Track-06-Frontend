import styled from 'styled-components';

import { ReactComponent as BurgerSvgStyled } from '../../images/sideBar/icon-menu-burger.svg';
import { ReactComponent as ThemeTogglerSvgStyled } from '../../images/theme/moon.svg';
import { ReactComponent as UserPhotoHeaderSvgStyled } from '../../images/profile/phAvatar.svg';
export const HeaderWrapper = styled.header`
  max-width: 100vw;
  padding: 24px 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 24px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BurgerIcon = styled(BurgerSvgStyled)`
  margin-right: 68px;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
    margin-right: 356px;
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

  margin-right: 17px;

  @media screen and (min-width: 768px) {
    padding: 12px 32px;
    line-height: 1.28;

    border-radius: 14px;

    margin-right: 24px;
  }
`;

export const ThemeTogglerIcon = styled(ThemeTogglerSvgStyled)`
  width: 24px;
  height: 24px;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    margin-right: 14px;

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
  color: rgba(52, 52, 52, 1);
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
