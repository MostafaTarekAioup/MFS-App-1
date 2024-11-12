import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

import dotenv from 'dotenv'
dotenv.config()
const isLocal = process.env.ENV === 'Local'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app1',
      filename: 'remoteEntry.js',
      remotes: {
        appHouse: isLocal
          ? 'http://localhost:4173/assets/remoteEntry.js'
          : 'https://mfe-app-house.vercel.app/assets/remoteEntry.js',
      },
      exposes: {
        './App1': './src/App.jsx',
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
