import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import viteTagger from "vite-tagger"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteTagger({ prefixName: "wb" })],
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
