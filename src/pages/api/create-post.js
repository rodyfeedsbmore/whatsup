
export const prerender = false;

import { db } from '../../lib/server/db';

export async function POST({ request }) {
  const data = await request.json();
  console.log('incoming:', data);

  const result = await db.execute({
    sql: `
      INSERT INTO posts (author, body, comments)
      VALUES (?, ?, ?)
    `,
    args: [data.author, data.body, JSON.stringify([])],
  });

  console.log('insert result:', result);

  return Response.json({ ok: true, result });
}