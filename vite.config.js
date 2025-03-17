import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'], // Ensures .jsx files are resolved properly
  },
  base: './',  // Ensures paths work correctly on Surge
  build: {
    outDir: 'dist',
  }
});