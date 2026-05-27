
import { getDb } from '../../lib/server/db.js';

export async function GET() {
  const db = getDb();

  const result = await db.execute('SELECT 1');

  return Response.json({
    ok: true,
    result,
  });
}