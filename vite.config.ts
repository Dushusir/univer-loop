import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  base: process.env.NODE_ENV === 'development' ? '' : './',
  plugins: [react()],
})
