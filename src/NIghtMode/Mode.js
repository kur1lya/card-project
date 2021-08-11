import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './Global';
import { useDarkMode } from './useDarkMode';
import Toggle from './Toogle';


function Mode() {
    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;



    if (!componentMounted) {
        return <div />
      };

    return (
        <ThemeProvider theme={themeMode }>
            <>
                <GlobalStyles />
                <Toggle theme={theme} toggleTheme={toggleTheme} />
            </>
        </ThemeProvider>
    )
}

export default Mode
