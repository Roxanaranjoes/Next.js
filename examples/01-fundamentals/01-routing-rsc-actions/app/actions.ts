'use server';

let count = 0;

export async function increment() {
  count += 1;
  return count;
}

export async function now() {
  return new Date().toISOString();
}
