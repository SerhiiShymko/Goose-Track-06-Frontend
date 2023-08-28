import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const BurgerIcon = styled.svg`
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

  @media screen and (min-width: 768px) {
    padding: 12px 32px;
    line-height: 1.28;

    border-radius: 14px;
  }
`;

export const ThemeTogglerIcon = styled.svg`
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

  line-height: 1;

  @media screen and (min-width: 768px) {
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

export const UserPhotoHeader = styled.img`
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
