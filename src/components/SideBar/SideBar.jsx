import React from 'react';
// import PropTypes from 'prop-types'

import UserNav from './UserNav/UserNav';
import LogoutBtn from './LogoutBtn/LogoutBtn';
import { ContainerSideBar } from './SideBar.styled';

function SideBar({ isShown, handleClick }) {
  return (
    <ContainerSideBar className={isShown ? 'shown' : 'hidden'}>
      <UserNav handleClick={handleClick}></UserNav>
      <LogoutBtn></LogoutBtn>
    </ContainerSideBar>
  );
}

// SideBar.propTypes = {

// }

export default SideBar;
