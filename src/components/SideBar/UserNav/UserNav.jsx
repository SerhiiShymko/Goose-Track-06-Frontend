import React from 'react';

// import PropTypes from 'prop-types'

import {
  CalendarSvg,
  NavLink,
  StatisticsSvg,
  UserSvg,
  LogoContainer,
  LogoInnerText,
  LogoText,
  LogoWrapper,
  CloseSvg,
  ButtonClose,
  NavigationBlock,
  NavigationLegend,
  Wrapper,
} from './UserNav.styled';
import { format } from 'date-fns';

function UserNav({ handleClick }) {
  const currentMonth = format(new Date(),'yyyy-MM')
  return (
    <Wrapper>
      <LogoContainer>
        <LogoWrapper />
        <LogoText>
          G<LogoInnerText>oo</LogoInnerText>seTrack
        </LogoText>
        <ButtonClose type="button" onClick={handleClick}>
          <CloseSvg />
        </ButtonClose>
      </LogoContainer>
      <NavigationBlock>
        <NavigationLegend>User Panel</NavigationLegend>
        <NavLink to="/account">
          <UserSvg />
          My account
        </NavLink>
        <NavLink to={`/calendar/month/${currentMonth}`}>
          <CalendarSvg />
          Calendar
        </NavLink>
        <NavLink to="/statistics">
          <StatisticsSvg />
          Statistics
        </NavLink>
      </NavigationBlock>
    </Wrapper>
  );
}

// UserNav.propTypes = {

// }

export default UserNav;
