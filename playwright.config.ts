import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  retries: 0,
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
