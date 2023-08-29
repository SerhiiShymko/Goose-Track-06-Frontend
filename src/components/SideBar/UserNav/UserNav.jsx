import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types'

import {
  LogoContainer,
  LogoInnerText,
  LogoText,
  LogoWrapper,
  CloseSvg,
} from './UserNav.styled';

function UserNav(props) {
  return (
    <div>
      <LogoContainer>
        <LogoWrapper />
        <LogoText>
          G<LogoInnerText>oo</LogoInnerText>seTrack
        </LogoText>
        <button type="button">
          <CloseSvg />
        </button>
      </LogoContainer>
      <nav>
        <NavLink to="/account">My account</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/statistics">Statistics</NavLink>
      </nav>
    </div>
  );
}

// UserNav.propTypes = {

// }

export default UserNav;
