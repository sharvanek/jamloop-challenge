import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
    },

    // Public pages (logged OUT)
    {
      name: 'public',
      testMatch: [
        '**/ui/landing/**/*.spec.ts',
        '**/ui/auth/**/*.spec.ts',
      ],
    },

    // Authenticated pages (logged IN)
    {
      name: 'authenticated',

      dependencies: ['setup'],

      testMatch: '**/ui/campaigns/**/*.spec.ts',

      use: {
        storageState: 'playwright/.auth/user.json',
      },
    },
  ],
});
