import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
  server: {
    proxy: {
      '/preferences': {
        target: 'https://api-adfs.onrender.com/',
        changeOrigin: true,
      },
    },
  },
});