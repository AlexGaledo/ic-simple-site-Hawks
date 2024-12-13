import { defineConfig } from 'vite';

export default defineConfig({
  root: './hawks',  // if your index.html is inside the 'hawks' folder
  build: {
    outDir: 'dist', // Output build files to the 'dist' folder
  },
});
