import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const lightTheme = {
  background: '#FFFFFF',
  text: '#000000',
  buttonColor: 'light-gray',
  secondaryBackground: 'lightgray',
  itemBackground: 'silver',
};

const darkTheme = {
  background: '#000000',
  text: '#FFFFFF',
  buttonColor: 'dark-gray',
  secondaryBackground: 'darkgray',
  itemBackground: 'dark-silver',
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(currentTheme =>
      currentTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}