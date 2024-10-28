import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: process.env.PORT || 5173,  // Use the PORT environment variable or fallback to 5173
    host: '0.0.0.0',  // Required for Render to properly expose the app
  },
  plugins: [react()],
})