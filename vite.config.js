import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Split heavy vendors into separate, long-cacheable chunks so the
    // initial payload is smaller and browsers can load them in parallel.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'three'
            if (id.includes('gsap')) return 'gsap'
            if (id.includes('react')) return 'react'
            return 'vendor'
          }
        },
      },
    },
    chunkSizeWarningLimit: 900,
  },
})
