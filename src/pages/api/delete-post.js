
export const prerender = false;

import { db } from '../../../src/lib/server/db';

export async function POST({ request }) {
  const { id } = await request.json();

  await db.execute({
    sql: `
      DELETE FROM posts
      WHERE id = ?
    `,
    args: [id],
  });

  return Response.json({
    ok: true,
  });
}