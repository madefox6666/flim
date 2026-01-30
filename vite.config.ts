
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'static', // renamed to avoid confusion with the public/assets folder
    sourcemap: false,
    minify: 'terser',
  },
  // This ensures everything in the 'public' folder is copied to the root of 'dist'
  publicDir: 'public' 
});
