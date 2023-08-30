import React from 'react';
import UserNav from './UserNav/UserNav';
import LogoutBtn from './LogoutBtn/LogoutBtn';
import { ContainerSideBar } from './SideBar.styled';
// import PropTypes from 'prop-types'

function SideBar({ isShown, handleClick }) {
  return (
    <ContainerSideBar className={isShown && 'isShown'}>
      <UserNav handleClick={handleClick}></UserNav>
      <LogoutBtn></LogoutBtn>
    </ContainerSideBar>
  );
}

// SideBar.propTypes = {

// }

export default SideBar;
