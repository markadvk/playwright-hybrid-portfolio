import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /.*auth\.setup\.ts/,
    },
    {
      name: 'api-tests',
      testMatch: /.*\.api\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'src/storage/auth.json',
      },
      dependencies: ['setup'],
    },

    {
      name: 'ui-tests',
      use: {
        baseURL: 'https://markadvk.github.io/verifykoders/demos/',
        ...devices['Desktop Chrome'],
        storageState: 'src/storage/auth.json',
      },
      dependencies: ['setup'],
    },
  ],
});
