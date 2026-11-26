import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative assets: one build works on github.io project pages AND at a custom domain root.
  base: '',
  plugins: [react(), tailwindcss()],
})
