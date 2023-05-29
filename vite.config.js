import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/nosh-it-delivery",
  build: {
    rollupOptions: {
      // ...
      external: [
        // ...
        'react-icons/Gr',
      ],
    },
  },
})
