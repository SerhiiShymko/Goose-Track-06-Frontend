import React from 'react';
import UserNav from './UserNav/UserNav';
import LogoutBtn from './LogoutBtn/LogoutBtn';
import { Container } from 'styles/Container';
// import PropTypes from 'prop-types'

function SideBar(props) {
  return (
    <Container>
      <UserNav></UserNav>
      <LogoutBtn></LogoutBtn>
    </Container>
  );
}

// SideBar.propTypes = {

// }

export default SideBar;
