import { ThemeProvider } from '@emotion/react';
import { Typography } from '@mui/material';
import {createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Russo One, sans-serif'
  }})

const Header = ({title}) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant='h2'>{title}</Typography>
      </ThemeProvider>
    </div>
  )
}

export default Header