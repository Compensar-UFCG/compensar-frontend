
import { FC, ReactElement } from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#e8eaf6',
    },
    secondary: {
      light: '#d1ff33',
      main: '#c6ff00',
      dark: '#8ab200',
      contrastText: '#fff',
    },
  },
  typography: {
    button: {
      color: '#e8eaf6',
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  },
});

const themeResponsive = responsiveFontSizes(theme);

interface ThemeContainerProps {
  children: ReactElement;
}

const ThemeContainer: FC<ThemeContainerProps> = ({ children }) => {

  return (
    <ThemeProvider theme={themeResponsive}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeContainer;
