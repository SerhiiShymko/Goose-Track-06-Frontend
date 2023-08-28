import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin-top: 64px;

  @media screen and (min-width: 768px) {
padding: 40px 175px;
  }
`;

export const UserPhoto = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
export const UserPhotoMainWrapper = styled.div`
  width: 74px;
  height: 74px;
  border: 2px solid #3e85f3;
  border-radius: 36px;
`;

export const PlusIcon = styled.svg`
  position: absolute;
  top: 60px;
  right: 140px;
`;

export const UserInfoWrapper = styled.div`
  margin-top: 14px;
  text-align: center;
`;

export const UserNameMain = styled.p`
  font-weight: 700;
  line-height: 1.28;
`;

export const UserSurnameMain = styled.p`
  font-weight: 600;
  line-height: 1.16;
`;

export const DetailsUserWrapper = styled.p`
  margin-top: 40px;
`;

export const DetailsUserMarginWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 24px;
  }
`;

export const Label = styled.label`
  font-weight: 400;
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
`;

export const BtnSaveChangesWrapper = styled.div`
  text-align: center;

  margin-top: 40px;
`;

export const BtnSaveChanges = styled.button`
  padding: 14px 50px;

  color: #ffffff;
  background-color: #3e85f3;

  border: none;
  border-radius: 10px;

  line-height: 1.28;
  font-weight: 600;
`;
