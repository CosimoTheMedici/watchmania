import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   css: {
//     modules: false,
//   },
// })
export default {
  plugins: [react()],
  css: {
    modules: false,
  },
  resolve: {
    alias: {
      // Add aliases for lodash modules to resolve them correctly
      'lodash/assign': 'lodash/assign', // You may need to adjust this path based on your project structure
    },
  },
};