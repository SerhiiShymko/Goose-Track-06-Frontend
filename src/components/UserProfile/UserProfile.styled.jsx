import styled from 'styled-components';
import { ReactComponent as PlusIconSvgStyled } from '../../images/profile/plusAvatar.svg';
import { ReactComponent as UserPhotoHeaderSvgStyled } from '../../images/profile/phAvatar.svg';
export const MainWrapper = styled.div`
  margin-top: 64px;

  @media screen and (min-width: 768px) {
    padding: 40px 175px;
  }
`;

export const UserPhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const UserPhotoMainWrapper = styled.div`
  width: 72px;
  height: 72px;

  overflow: hidden;

  border: 2px solid #3e85f3;
  border-radius: 36px;

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;

    border-radius: 62px;
  }
`;

export const UserPhoto = styled(UserPhotoHeaderSvgStyled)`
  width: 72px;
  height: 72px;
  border-radius: 72px;
  padding: 5px;
  border: 2px solid #3e85f3;
  background: lightgray 50% / cover no-repeat;

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;

    border-radius: 62px;
  }
`;

export const PlusIcon = styled(PlusIconSvgStyled)`
  width: 14px;
  height: 14px;
  position: absolute;

  top: 60px;
  right: 140px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;

    top: 105px;
    right: 134px;
  }
  @media screen and (min-width: 1440px) {
    top: 105px;
    right: 340px;
  } 
`;

export const UserInfoWrapper = styled.div`
  margin-top: 14px;
  text-align: center;
`;

export const UserNameMain = styled.p`
  color: #343434;

  font-weight: 700;
  line-height: 1.28;

  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;

    line-height: 1;
  }
`;

export const UserSurnameMain = styled.p`
  color: #343434;

  font-weight: 600;
  line-height: 1.16;

  @media screen and (min-width: 768px) {
    line-height: 1.28;
  }
`;

export const DetailsUserWrapper = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 1440px) {
    margin-top: 44px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    gap: 24px 50px;
    width: 758px;
    margin: 40px auto 0;
  }
`;

export const DetailsUserMarginWrapper = styled.div`
  @media screen and (max-width: 1439px) {
    &:not(:first-child) {
      margin-top: 24px;
    }
  }
`;

export const Label = styled.label`
  color: #111111;
  line-height: 1.28;
`;

export const InputWrapper = styled.div`
  margin-top: 8px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  color: rgba(17, 17, 17, 1);
  font-weight: 600;
  line-height: 1.28;
  padding: 12px 0px 12px 14px;
  border-radius: 8px;

  &::placeholder {
    color: rgba(17, 17, 17, 0.5);
    font-weight: 600;
    line-height: 1.28;
  }

  &:focus {
    outline: none;
    border-color: rgba(17, 17, 17, 1);
  }

  @media screen and (min-width: 768px) {
    line-height: 1.12;

    height: 46px;
    padding: 14px 0px 14px 18px;
  }
  @media screen and (min-width: 1440px) {
    width: 354px;
  }
`;

export const BtnSaveChangesWrapper = styled.div`
  text-align: center;

  margin-top: 40px;

  @media screen and (min-width: 1440px) {
    margin-top: 88px;
  }
`;

export const BtnSaveChanges = styled.button`
  padding: 14px 50px;

  color: #ffffff;
  background-color: #3e85f3;

  border: none;
  border-radius: 10px;

  line-height: 1.28;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    padding: 15px 84px;
    border-radius: 16px;
  }
`;
