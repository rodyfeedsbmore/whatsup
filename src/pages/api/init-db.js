
import { db } from '../../lib/server/db';

export async function GET() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      author TEXT,
      body TEXT,
      comments TEXT
    )
  `);

  return Response.json({ ok: true, message: 'posts table ready' });
}