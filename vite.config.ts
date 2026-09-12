import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 43123,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 43124,
    strictPort: true,
  },
})
