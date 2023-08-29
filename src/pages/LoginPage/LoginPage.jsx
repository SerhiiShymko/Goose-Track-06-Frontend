import React from 'react';

import Header from 'components/Header/Header';
import UserProfile from 'components/UserProfile/UserProfile';
import MainLayout from 'components/MainLayout/MainLayout';

const LoginPage = () => {
  return (
    <>
      <MainLayout />
      {/* <Header /> */}
      <UserProfile />
    </>
  );
};

export default LoginPage;
