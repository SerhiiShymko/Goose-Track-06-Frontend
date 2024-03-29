import Header from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import React from 'react';
import { Wrapper } from './MainLayout.styled';
import { useState } from 'react';
import { useEffect } from 'react';
// import PropTypes from 'prop-types'

function MainLayout(props) {
  const getInitialState = () => (window.innerWidth >= 1440 ? true : false);

  const [isShown, setIsShown] = useState();

  useEffect(() => {
    setIsShown(getInitialState());
  }, []);

  const handleClick = () => setIsShown(!isShown);

  return (
    <Wrapper>
      <SideBar isShown={isShown} handleClick={handleClick} />
      <Header handleClick={handleClick} />
    </Wrapper>
  );
}

// MainLayout.propTypes = {

// }

export default MainLayout;
