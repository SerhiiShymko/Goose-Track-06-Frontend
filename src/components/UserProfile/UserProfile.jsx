import userAvatar from '../../images/profile/ph_user.png';
import {
  MainWrapper,
  PlusIcon,
  UserPhoto,
  UserPhotoMainWrapper,
  UserInfoWrapper,
  UserNameMain,
  DetailsUserWrapper,
  Input,
  Label,
  InputWrapper,
  DetailsUserMarginWrapper,
  BtnSaveChangesWrapper,
  BtnSaveChanges,
} from './UserProfile.styled';

const UserProfile = () => {
  return (
    <MainWrapper>
      <UserPhoto>
        <UserPhotoMainWrapper>
          <img src={userAvatar} alt="userAvatar" width="72" height="72" />
        </UserPhotoMainWrapper>
        <PlusIcon
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#3E85F3" />
          <path
            d="M12 6.75V17.25"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.75 12H17.25"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </PlusIcon>
      </UserPhoto>
      <UserInfoWrapper>
        <UserNameMain>Nadia Doe</UserNameMain>
        <UserNameMain>User</UserNameMain>
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
              <Input type="number" placeholder="Your phone number" />
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
