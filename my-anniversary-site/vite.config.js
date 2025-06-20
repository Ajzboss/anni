import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// MUST be a function to access `mode`
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/anni/' : '/',
    plugins: [svelte()]
  };
});