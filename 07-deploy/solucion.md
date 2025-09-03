# Soluciones — 07-Deploy

- Consumir env en RSC:
```ts
const base = process.env.API_BASE_URL!;
const res = await fetch(`${base}/status`);
```

- `vercel.json` ejemplo para headers:
```json
{
  "headers": [
    { "source": "/(.*)", "headers": [{ "key": "X-Frame-Options", "value": "DENY" }] }
  ]
}
```
