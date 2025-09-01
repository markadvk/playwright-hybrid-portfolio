import { test, request } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('setup auth and save storage state', async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.post('https://dummyjson.com/auth/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      username: 'emilys',
      password: 'emilyspass',
    },
  });

  if (!response.ok()) {
    throw new Error(`Login failed: ${response.status()}`);
  }

  const body = await response.json();
  console.log('Token:', body.accessToken);

  // Save storage state
  const storagePath = path.join(__dirname, '../storage/auth.json');
  fs.mkdirSync(path.dirname(storagePath), { recursive: true });
  await apiContext.storageState({ path: storagePath });

  await apiContext.dispose();
});
