import styled from 'styled-components';
import { ReactComponent as PlusIconSvgStyled } from '../../images/profile/plusAvatar.svg';
import { ReactComponent as UserPhotoHeaderSvgStyled } from '../../images/profile/phAvatar.svg';
import { ReactComponent as IconError } from '../../images/registrPage/email-error-outline.svg';
import { ReactComponent as IconSucces } from '../../images/registrPage/email-done.svg';
import { Field } from 'formik';

export const MainWrapper = styled.div`
  margin-top: 64px;
  background-color: ${({ theme }) => theme.colors.backgroundSubcomponents};
  padding: 30px 24px;
  border-radius: 16px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: auto 175px;
  }

  @media screen and (min-width: 1440px) {
    padding: auto 165px;
    margin-top: 32px;
  }
`;

export const UserPhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 767px) {
    position: absolute;
    left: 131px;
    top: -35px;
  }
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

export const UserPhoto = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 72px;
  border: 2px solid #3e85f3;
  background: lightgray 50% / cover no-repeat;

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;

    border-radius: 62px;
  }
`;

export const UserPhotoSvg = styled(UserPhotoHeaderSvgStyled)`
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
  right: 10px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;

    top: 105px;
    right: 20px;
  }
  @media screen and (min-width: 1440px) {
    right: 20px;
  }
`;

export const UserInfoWrapper = styled.div`
  margin-top: 14px;
  text-align: center;
`;

export const UserNameMain = styled.p`
  color: ${({ theme }) => theme.colors.colorBody};

  font-weight: 700;
  line-height: 1.28;

  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;

    line-height: 1;
  }
`;

export const UserSurnameMain = styled.p`
  color: ${({ theme }) => theme.colors.colorBody};

  font-weight: 600;
  line-height: 1.16;

  @media screen and (min-width: 768px) {
    line-height: 1.28;
  }
`;

export const FormStyled = styled.div`
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
  color: ${({ theme }) => theme.colors.colorLabelsUserProfile};
  line-height: 1.28;
  position: relative;
`;

export const InputWrapper = styled.div`
  margin-top: 8px;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 42px;

  border: 1px solid
    ${({ theme }) =>
      theme.name === 'light'
        ? 'rgba(17, 17, 17, 0.1)'
        : 'rgba(255, 255, 255, 0.1)'};
  background-color: ${({ theme }) => theme.colors.backgroundSubcomponents};
  color: ${({ theme }) => theme.colors.colorAccent};
  font-weight: 600;
  line-height: 1.28;
  padding: 12px 0px 12px 14px;
  border-radius: 8px;
  margin-top: 8px;
  &::placeholder {
    color: ${({ theme }) =>
      theme.name === 'light'
        ? 'rgba(17, 17, 17, 0.5)'
        : 'rgba(255, 255, 255, 0.5)'};
    font-weight: 600;
    line-height: 1.28;
  }

  &:focus {
    outline: none;
    border-color: rgba(17, 17, 17, 1);
  }

  &:not(:last-child) {
    margin-bottom: 18px;
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

  @media screen and (min-width: 1440px) {
    margin-top: 12px;
  }
`;

export const BtnSaveChanges = styled.button`
  padding: 14px 50px;
  cursor: pointer;
  color: #ffffff;
  background-color: #3e85f3;

  border: none;
  border-radius: 10px;

  line-height: 1.28;
  font-weight: 600;
  &:disabled {
    background-color: #bcb9bb;
  }
  @media screen and (min-width: 768px) {
    padding: 15px 84px;
    border-radius: 16px;
  }
`;

export const SuccesIcon = styled(IconSucces)`
  position: absolute;
  right: 10px;
  bottom: -2px;
`;

export const ErrorIcon = styled(IconError)`
  position: absolute;
  right: 10px;
  bottom: 48px;
`;

export const LabelText = styled.p`
  color: ${props => props.color || '#111'};
  margin: 0px;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const InputAvatar = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const ChangeAvatarBtn = styled.button`
  position: relative;
  border-radius: 64px;
  &:hover,
  &:focus {
    transform: none;
  }
`;
