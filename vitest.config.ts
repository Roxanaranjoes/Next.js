import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['challenges/**/tests/**/*.test.ts'],
    exclude: ['**/node_modules/**', '**/dist/**', 'examples/**', 'projects/**', 'snippets/**'],
    environment: 'node',
  },
});

