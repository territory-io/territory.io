import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Add error handling for unexpected errors on the connection pool
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Test database connectivity function
export async function testDatabaseConnection() {
  const client = await pool.connect();
  try {
    await client.query('SELECT 1');
    console.log('Database connection successful');
    return true;
  } catch (err) {
    console.error('Database connection failed:', err);
    return false;
  } finally {
    client.release();
  }
}
