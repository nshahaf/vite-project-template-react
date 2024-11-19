import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? '/baseUrl' : '/', // Set the base URL based on the mode
    // build: {outDir: '../backend/public', emptyOutDir: true} // Uncomment this line if you want to build the frontend in a separate directory

  };
});
