import React from 'react';
import { CssBaseline, ThemeProvider, GlobalStyles } from '@mui/material';
import { theme } from '~/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from '~/navigation';
import { Provider as InversifyProvider } from 'inversify-react';
import { container } from '~/common/di';

export const AppContainer: React.FC = () => {
  return (
    <InversifyProvider container={container}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={{ body: { background: 'transparent' } }} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </InversifyProvider>
  )
}
