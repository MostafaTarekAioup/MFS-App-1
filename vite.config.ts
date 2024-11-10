import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
        './App1': './src/App.tsx',
        './Hello': './src/Components/Hello',
        './store': './src/store.ts',
      },
      shared: ['react', 'react-dom', 'jotai'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
