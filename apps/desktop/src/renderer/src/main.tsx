import '~/imports'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { getAllPermissions } from '~/utils'

import { AppContainer } from '~/containers'

getAllPermissions();

const root = document.querySelector('#root') as HTMLElement

createRoot(root).render(
  <StrictMode>
    <AppContainer />
  </StrictMode>
);
