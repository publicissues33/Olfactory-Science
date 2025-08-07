import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/Olfactory-Science/' : '/'
  
  return {
    plugins: [react(),tailwindcss()],
    base: base,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
