import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#253278', // Dark Blue
    },
    secondary: {
      main: '#00CA2B', // Green
    },
    background: {
      default: '#f1f5f9', // Light Gray
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

export default customTheme;