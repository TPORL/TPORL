import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { globSync } from 'glob'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  root: path.resolve(import.meta.dirname, 'pages'),
  base: './',
  plugins: [tailwindcss()],
  publicDir: path.resolve(import.meta.dirname, 'public'),
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        globSync('pages/**/*.html').map((file) => [
          path.relative(
            'pages',
            file.slice(0, file.length - path.extname(file).length),
          ),
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
    },
    outDir: path.resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: '0.0.0.0',
  },
})
