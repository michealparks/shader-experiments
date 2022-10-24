import { defineConfig } from 'vite'
import ssl from '@vitejs/plugin-basic-ssl'
import vitePluginString from 'vite-plugin-string'
import define from './env'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'assets',
  server: {
    https: true,
    fs: {
      strict: true,
      allow: ['.'],
    },
  },
  plugins: [
    ssl(),
    (vitePluginString as any).default({
      exclude: 'node_modules/**',
    }),
  ],
  envPrefix: ['THREE'],
  define,
})
