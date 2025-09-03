import { test, expect } from '@playwright/test';

test('navega a about', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /about/i }).click();
  await expect(page).toHaveURL(/about/);
});
