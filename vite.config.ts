/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import istanbul from 'vite-plugin-istanbul';
import { defineConfig } from 'vitest/config';
import { coverageConfigDefaults } from 'vitest/config';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    open: true,
  },
  plugins: [
    react(),
    eslint(),
    svgr(),
    istanbul({
      cypress: true,
      requireEnv: false,
      forceBuildInstrument: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'c8',
      all: true,
      skipFull: false,
      reporter: 'text',
      exclude: [
        ...coverageConfigDefaults.exclude,
        '**/entry-client.tsx',
        '**/entry-server.tsx',
        '**/InjectPreloadState.tsx',
        '**/src/types/data.ts',
        'server.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: { sourcemap: 'hidden' },
});
