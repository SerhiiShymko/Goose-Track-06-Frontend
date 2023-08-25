import * as React from 'react';

export default function ThemeProvider() {
  const [mode, setMode] = React.useState < PaletteMode > 'light';
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  //   return (
  //     <ColorModeContext.Provider value={colorMode}>
  //       <ThemeProvider theme={theme}>
  //         <Page />
  //       </ThemeProvider>
  //     </ColorModeContext.Provider>
  //   );
}
