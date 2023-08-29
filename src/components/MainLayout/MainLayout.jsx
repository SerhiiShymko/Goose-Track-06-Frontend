import Header from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import React from 'react';
import { Wrapper } from './MainLayout.styled';
// import PropTypes from 'prop-types'

function MainLayout(props) {
  return (
    <Wrapper>
      <SideBar></SideBar>
      <Header></Header>
    </Wrapper>
  );
}

// MainLayout.propTypes = {

// }

export default MainLayout;
