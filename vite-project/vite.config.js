import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  // src/Data/Data.js contains JSX, so JSX must be enabled for plain .js files too
  oxc: {
    include: /\.[jt]sx?$/,
    exclude: /node_modules/,
    lang: 'jsx',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{js,jsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary'],
      include: ['src/**/*.{js,jsx}'],
      exclude: ['src/**/*.test.{js,jsx}', 'src/main.jsx'],
    },
  },
})
