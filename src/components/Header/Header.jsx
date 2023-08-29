import userAvatar from '../../images/profile/ph_user.png';

import {
  ContentWrapper,
  BurgerIcon,
  FeedbackBtn,
  ThemeTogglerIcon,
  UserName,
  UserPhotoHeaderWrapper,
  UserWrapper,
  HeaderMenu,
  UserPhotoHeader,
} from './Header.styled';

const Header = () => {
  return (
    <header>
      <ContentWrapper>
        <HeaderMenu>
          <BurgerIcon
            version="1.1"
            xmlns="http://www.w3.org/2000/BurgerIcon"
            viewBox="0 0 32 32"
          >
            <title>icon-menu-burger</title>
            <path
              fill="none"
              stroke="#000"
              stroke-width="2.6667"
              stroke-miterlimit="4"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 16h24"
            ></path>
            <path
              fill="none"
              stroke="#000"
              stroke-width="2.6667"
              stroke-miterlimit="4"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 8h24"
            ></path>
            <path
              fill="none"
              stroke="#000"
              stroke-width="2.6667"
              stroke-miterlimit="4"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 24h24"
            ></path>
          </BurgerIcon>
          <FeedbackBtn type="button">Feedback</FeedbackBtn>
        </HeaderMenu>
        <UserWrapper>
          <ThemeTogglerIcon
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="moon">
              <path
                id="Vector"
                d="M27.6558 17.3933C26.7523 17.6333 25.8214 17.7547 24.8865 17.7546C22.0398 17.7546 19.3665 16.648 17.3585 14.64C16.0399 13.3138 15.0919 11.6651 14.6091 9.85837C14.1262 8.05161 14.1253 6.14985 14.6065 4.34264C14.6666 4.11669 14.6662 3.8789 14.6054 3.65314C14.5446 3.42738 14.4255 3.22157 14.26 3.05638C14.0945 2.89119 13.8885 2.77241 13.6627 2.71196C13.4368 2.65151 13.199 2.65152 12.9732 2.71198C10.7107 3.31489 8.64659 4.50214 6.98784 6.15464C1.79051 11.352 1.79051 19.812 6.98784 25.012C8.22321 26.2542 9.69269 27.2391 11.3112 27.9097C12.9298 28.5803 14.6652 28.9232 16.4172 28.9186C18.1687 28.9236 19.9037 28.5809 21.5218 27.9105C23.14 27.2402 24.609 26.2554 25.8438 25.0133C27.4976 23.3542 28.6854 21.289 29.2878 19.0253C29.3477 18.7994 29.3472 18.5618 29.2864 18.3362C29.2256 18.1106 29.1067 17.9049 28.9415 17.7397C28.7762 17.5745 28.5705 17.4555 28.3449 17.3947C28.1193 17.334 27.8817 17.3335 27.6558 17.3933ZM23.9598 23.128C22.9718 24.1214 21.7965 24.9091 20.5021 25.4453C19.2076 25.9815 17.8196 26.2557 16.4185 26.252C15.0169 26.2555 13.6285 25.981 12.3336 25.4446C11.0387 24.9081 9.86302 24.1203 8.87451 23.1266C4.71718 18.968 4.71718 12.2 8.87451 8.04131C9.67785 7.23887 10.6053 6.57119 11.6212 6.06398C11.4725 7.98272 11.7398 9.91095 12.4048 11.7169C13.0698 13.5228 14.1169 15.1639 15.4745 16.528C16.8356 17.8898 18.4762 18.9398 20.2829 19.6053C22.0896 20.2709 24.0193 20.5361 25.9385 20.3826C25.4285 21.3968 24.7607 22.3235 23.9598 23.128Z"
                fill="#3E85F3"
              />
            </g>
          </ThemeTogglerIcon>
          <UserName>Nadia</UserName>
          <UserPhotoHeaderWrapper>
            <UserPhotoHeader
              src={userAvatar}
              alt="userAvatar"
              width="32"
              height="32"
            />
          </UserPhotoHeaderWrapper>
        </UserWrapper>
      </ContentWrapper>
    </header>
  );
};
export default Header;