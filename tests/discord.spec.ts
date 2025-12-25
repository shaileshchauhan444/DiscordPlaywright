import { test, expect } from '@playwright/test';
import { launchDiscord } from '../utils/electronHelper';

test('Launch Discord and get title', async () => {
  const { app, page } = await launchDiscord();

  const title = await page.title();
  console.log('Discord Title:', title);

  expect(title).toContain('Discord');

  await app.close();
});