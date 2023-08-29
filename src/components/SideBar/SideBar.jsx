import React from 'react';
import UserNav from './UserNav/UserNav';
import LogoutBtn from './LogoutBtn/LogoutBtn';
import { ContainerSideBar } from './SideBar.styled';
import { useState } from 'react';
// import PropTypes from 'prop-types'

function SideBar() {
  const [isShown, setIsShown] = useState(true);

  const handleClick = () => setIsShown(prevState => !prevState);
  return (
    isShown && (
      <ContainerSideBar>
        <UserNav handleClick={handleClick}></UserNav>
        <LogoutBtn></LogoutBtn>
      </ContainerSideBar>
    )
  );
}

// SideBar.propTypes = {

// }

export default SideBar;
