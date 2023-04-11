import '~/imports';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppContainer } from '~/containers';

const root = document.querySelector('#root') as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <AppContainer />
  </StrictMode>
);
