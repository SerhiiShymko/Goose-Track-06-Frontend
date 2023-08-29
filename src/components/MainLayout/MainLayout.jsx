import Header from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import React, { Suspense } from 'react';
import { Wrapper } from './MainLayout.styled';
import { Outlet } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';
// import PropTypes from 'prop-types'

function MainLayout(props) {
  return (
    <Wrapper>
      <SideBar />
      <Header />
      <Suspense fallback={Spinner}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
}

// MainLayout.propTypes = {

// }

export default MainLayout;
