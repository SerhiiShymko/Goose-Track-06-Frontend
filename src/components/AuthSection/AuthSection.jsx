import React from 'react';
import { Link } from 'react-router-dom';

import goose from '../../images/mainPage/GOOSE_LOGO.svg';
import loginsvg from '../../images/mainPage/login.svg';

const AuthSection = () => {
  return (
    <header>
      <img src={goose} alt="goose_logo" />
      <h1>GooseTrack</h1>
      <div>
        <Link to="/register"></Link>
        <Link to="/login">
          <svg>
            <use href={loginsvg} />
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default AuthSection;
