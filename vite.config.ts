// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { viteSingleFile } from "vite-plugin-singlefile"



export default defineConfig({
//   plugins: [viteSingleFile()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'lit-signals',
      // the proper extensions will be added
      fileName: 'lit-signals'
    }
  }
})