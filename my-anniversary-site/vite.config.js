import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: '/anni/',  // ← replace with your actual repo name
  plugins: [svelte()]
})