export const runtime = 'edge';

export async function GET() {
  return new Response(JSON.stringify({ hello: 'edge' }), {
    headers: { 'content-type': 'application/json' }
  });
}
