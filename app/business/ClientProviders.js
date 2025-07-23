'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import customTheme from './theme';
import { AuthProvider } from './auth/AuthProvider';

export default function ClientProviders({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
}