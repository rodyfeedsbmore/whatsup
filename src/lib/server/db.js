
import 'dotenv/config';
import { createClient } from '@libsql/client';

let dbClient = null;

export function getDb() {
  if (!dbClient) {
    const url = process.env.TURSO_HTTP_URL;
    const token = process.env.TURSO_TOKEN;

    if (!url || !token) {
      throw new Error('Missing TURSO_HTTP_URL or TURSO_TOKEN');
    }

    dbClient = createClient({
      url,
      authToken: token,
    });

    console.log('[db] created libsql client for', url);
  }

  return dbClient;
}