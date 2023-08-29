import React from 'react';
import { Link } from 'react-router-dom';

import goose from '../../images/mainPage/GOOSE_LOGO.svg';
import loginsvg from '../../images/mainPage/login.svg';

const AuthSection = () => {
  return (
    <header>
      <img src={goose} alt="goose_logo" />
      <h1>GooseTrack</h1>
      <nav>
        <Link to="/register">Sign up</Link>
        <Link to="/login">
          Log in
          <svg height="13.5" width="13.5">
            <use href={loginsvg} />
          </svg>
        </Link>
      </nav>
    </header>
  );
};

export default AuthSection;
