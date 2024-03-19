
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
    h1: {
      color: '#70727b'
    },
    h2: {
      color: '#70727b'
    },
    h3: {
      color: '#70727b'
    },
    h4: {
      color: '#70727b'
    },
    h5: {
      color: '#70727b'
    },
    h6: {
      color: '#70727b',
    },
    subtitle1: {
      color: '#70727b',
    },
    subtitle2: {
      color: '#70727b',
    },
    body1: {
      color: '#70727b',
    },
    body2: {
      color: '#70727b',
    },
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
