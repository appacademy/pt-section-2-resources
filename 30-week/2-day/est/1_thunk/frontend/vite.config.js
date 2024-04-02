import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [
        react(),
        eslint({
            lintOnStart: true,
            failOnError: mode === 'production',
        }),
    ],
    server: {
        proxy: {
            '/api': 'http://localhost:5000',
            '/backend': {
                target: 'http://localhost:5000/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/backend/, ''),
            },
        },
        // To automatically open the app in the browser whenever the server starts,
        // uncomment the following lines:
        // open: true
    },
}));
