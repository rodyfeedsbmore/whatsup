
export const prerender = false;

import { db } from '../../../src/lib/server/db';

export async function POST({ request }) {
  const { id, body } = await request.json();

  await db.execute({
    sql: `
      UPDATE posts
      SET body = ?
      WHERE id = ?
    `,
    args: [body, id],
  });

  return Response.json({
    ok: true,
  });
}