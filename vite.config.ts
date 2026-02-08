import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",

  // Security configurations
  server: {
    // Restrict access to files outside of the workspace
    fs: {
      strict: true,
      allow: ['..'],
      deny: [
        '**/.env',
        '**/.env.*',
        '**/node_modules/**',
        '**/.git/**',
      ]
    },
    // Prevent CORS issues in development while maintaining security
    cors: true,
  },

  build: {
    // Generate source maps for debugging but keep them separate
    sourcemap: true,
    // Rollup security options
    rollupOptions: {
      output: {
        // Prevent naming collisions that could lead to DOM clobbering
        sanitizeFileName: (name) => {
          const INVALID_CHAR_REGEX = /[<>:"|?*\x00-\x1F]/g;
          const WINDOWS_RESERVED_NAME_REGEX = /^(con|prn|aux|nul|com\d|lpt\d)$/i;

          const sanitized = name.replace(INVALID_CHAR_REGEX, '');
          return WINDOWS_RESERVED_NAME_REGEX.test(sanitized) ? `_${sanitized}` : sanitized;
        },
      },
    },
  },
})
