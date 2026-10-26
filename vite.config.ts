import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (/node_modules[\\/](framer-motion|motion-dom|motion-utils)[\\/]/.test(id)) {
            return "motion";
          }
          if (/node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) {
            return "react";
          }
        },
      },
    },
  },
})
