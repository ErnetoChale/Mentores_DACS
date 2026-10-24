import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Mentores_DACS/', // <-- Agrega esta línea con el nombre exacto de tu repo
})