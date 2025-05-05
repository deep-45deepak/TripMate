import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': 'http://localhost:8080', // Replace with your backend API URL
//     },
//   },
  
// })
// vite.config.js
export default defineConfig({
  server: {
    proxy: {
      '/preferences': {
        target: 'https://backendapi-nyaa.onrender.com',
        changeOrigin: true,
      },
    },
  },
});