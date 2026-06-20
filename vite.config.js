import { defineConfig } from 'vite'
import path from 'path'
import { readdirSync } from 'fs'

const htmlFiles = readdirSync('./demo')
  .filter(f => f.endsWith('.html'))
  .reduce((acc, file) => {
    const name = path.basename(file, '.html')
    acc[name] = path.resolve('./demo', file)
    return acc
  }, {})

export default defineConfig({
  root: './demo',
  appType: 'mpa',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: htmlFiles
    }
  }
})
