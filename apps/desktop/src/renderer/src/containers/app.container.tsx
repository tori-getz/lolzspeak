import React from 'react';
import { CssBaseline, ThemeProvider, GlobalStyles } from '@mui/material';
import { theme } from '~/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from '~/navigation';

export const AppContainer: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ body: { background: 'transparent' } }} />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
