import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/Global';

export const Theme = ({ children }) => {
  const { dark, light } = theme;
  const [themeUser, setThemeUser] = useState('light');
  const themeToggle = useSelector(state => state.auth.user.themeToggle);

  useEffect(() => {
    setThemeUser(themeToggle === 'light' ? light : dark);
  }, [themeToggle, dark, light]);

  return <ThemeProvider theme={themeUser}>{children}</ThemeProvider>;
};
