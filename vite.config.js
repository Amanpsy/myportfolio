import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Added to fix Netlify deployment errors
  base: '/',  // ensures assets load correctly on Netlify
  build: {
    target: 'esnext',  // makes sure modern JS is used to avoid MIME type issues
  },
  server: {
    https: true,        // fixes SockJS SecurityError locally
    hmr: {
      protocol: 'wss',  // secure WebSocket for HMR
      host: 'localhost',
    },
  },
})
