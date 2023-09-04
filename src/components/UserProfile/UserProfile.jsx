// import { useEffect, useState } from 'react';
import {
  MainWrapper,
  PlusIcon,
  UserPhotoWrapper,
  UserPhoto,
  UserInfoWrapper,
  UserNameMain,
  DetailsUserWrapper,
  Input,
  Label,
  InputWrapper,
  DetailsUserMarginWrapper,
  BtnSaveChangesWrapper,
  BtnSaveChanges,
  UserSurnameMain,
} from './UserProfile.styled';
// import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const UserProfile = () => {
  // const dispatch = useDispatch();
  const currentUserInfo = useSelector(selectUser);
  const a = currentUserInfo.name.split(' ');
  console.log(a[0]);
  return (
    <MainWrapper>
      <UserPhotoWrapper>
        <UserPhoto />
        <PlusIcon />
      </UserPhotoWrapper>
      <UserInfoWrapper>
        <UserNameMain>Nadia Doe</UserNameMain>
        <UserSurnameMain>User</UserSurnameMain>
      </UserInfoWrapper>
      <DetailsUserWrapper>
        <DetailsUserMarginWrapper>
          <Label>
            User Name
            <InputWrapper>
              <Input type="text" placeholder="Your name" />
            </InputWrapper>
          </Label>
        </DetailsUserMarginWrapper>
        <DetailsUserMarginWrapper>
          <Label>
            Birthday
            <InputWrapper>
              <Input type="text" placeholder="Your birthday" />
            </InputWrapper>
          </Label>
        </DetailsUserMarginWrapper>
        <DetailsUserMarginWrapper>
          <Label>
            Email
            <InputWrapper>
              <Input type="email" placeholder="Your email" />
            </InputWrapper>
          </Label>
        </DetailsUserMarginWrapper>
        <DetailsUserMarginWrapper>
          <Label>
            Phone
            <InputWrapper>
              <Input type="text" placeholder="Your phone number" />
            </InputWrapper>
          </Label>
        </DetailsUserMarginWrapper>
        <DetailsUserMarginWrapper>
          <Label>
            Skype
            <InputWrapper>
              <Input type="text" placeholder="Add a skype number" />
            </InputWrapper>
          </Label>
        </DetailsUserMarginWrapper>
      </DetailsUserWrapper>
      <BtnSaveChangesWrapper>
        <BtnSaveChanges type="button">Save changes</BtnSaveChanges>
      </BtnSaveChangesWrapper>
    </MainWrapper>
  );
};

export default UserProfile;
