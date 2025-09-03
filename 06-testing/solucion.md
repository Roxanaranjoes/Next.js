# Soluciones — 06-Testing

- Mock de Server Action:
```ts
vi.mock('../app/actions', () => ({ increment: vi.fn().mockResolvedValue(1) }));
```

- E2E navegación:
```ts
import { test, expect } from '@playwright/test';
test('navega a /about', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /about/i }).click();
  await expect(page).toHaveURL(/about/);
});
```
