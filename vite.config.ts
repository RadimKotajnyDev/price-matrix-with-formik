import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  /*build: {
    target: ['chrome89', 'edge89', 'firefox89', 'opera75', 'safari15'] // top-level-await fix
  },*/
  plugins: [react()],
  server: {
    host: false
  }

})
