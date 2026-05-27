
export const prerender = false;

import { db } from '../../../src/lib/server/db';

export async function GET() {
  const result = await db.execute(`
    SELECT * FROM posts
    ORDER BY id DESC
  `);

  return Response.json(result.rows);
}