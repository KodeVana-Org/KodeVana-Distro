import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    // ... other plugins
  ],
   server: {
     port:8001
   }
});

