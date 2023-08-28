import React, { useEffect, useState } from 'react';
import { selectTheme } from 'redux/auth/selectors';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/Global';

export const Theme = ({ children }) => {
  const { dark, light } = theme;
  const [themeUser, setThemeUser] = useState('light');

  useEffect(() => {
    setThemeUser(selectTheme === 'light' ? light : dark);
  }, [dark, light]);

  return <ThemeProvider theme={themeUser}>{children}</ThemeProvider>;
};
