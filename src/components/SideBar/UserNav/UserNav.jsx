import React from 'react';
import { CalendarSvg, NavLink, StatisticsSvg, UserSvg } from './UserNav.styled';
// import PropTypes from 'prop-types'

import {
  LogoContainer,
  LogoInnerText,
  LogoText,
  LogoWrapper,
  CloseSvg,
  ButtonClose,
  NavigationBlock,
  NavigationLegend,
} from './UserNav.styled';

function UserNav(props) {
  return (
    <div>
      <LogoContainer>
        <LogoWrapper />
        <LogoText>
          G<LogoInnerText>oo</LogoInnerText>seTrack
        </LogoText>
        <ButtonClose type="button">
          <CloseSvg />
        </ButtonClose>
      </LogoContainer>
      <NavigationBlock>
        <NavigationLegend>User Panel</NavigationLegend>
        <NavLink to="/account">
          <UserSvg />
          My account
        </NavLink>
        <NavLink to="/calendar">
          <CalendarSvg />
          Calendar
        </NavLink>
        <NavLink to="/statistics">
          <StatisticsSvg />
          Statistics
        </NavLink>
      </NavigationBlock>
    </div>
  );
}

// UserNav.propTypes = {

// }

export default UserNav;
