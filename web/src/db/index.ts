import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

// Create Neon HTTP client
const sql = neon(connectionString);

// Create the drizzle instance with Neon HTTP driver
export const db = drizzle(sql, { schema });

// Export for use in API routes and server components
export type Database = typeof db;
