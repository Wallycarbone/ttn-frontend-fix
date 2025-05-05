import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      // Ensure external paths are properly handled
      external: [],
    }
  },
  // Force explicit base path to handle relative imports correctly
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})