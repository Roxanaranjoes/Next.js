// Route Handler en Edge Runtime
// Coloca este archivo como app/api/hello/route.ts en un ejemplo/app

export const runtime = 'edge';

export async function GET() {
  return new Response(JSON.stringify({ hello: 'edge' }), {
    headers: { 'content-type': 'application/json' }
  });
}
