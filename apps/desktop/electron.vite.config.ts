import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

import * as path from 'node:path';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: [
        {
          find: '~',
          replacement: path.resolve(__dirname, 'src', 'renderer', 'src'),
        }
      ]
    },
    plugins: [react()]
  }
})
