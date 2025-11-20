// Example: How to run migrations programmatically (if needed)
import { migrate } from "drizzle-orm/neon-serverless/migrator";
import { db } from "./index";
import path from "path";

export async function runMigrations() {
  try {
    console.log("Running migrations...");

    //@ts-ignore
    await migrate(db, { migrationsFolder: path.resolve(__dirname, "migrations") });
    console.log("Migrations completed successfully");
  } catch (error) {
    console.error("Migration failed:", error);
    throw error;
  }
}

// This is typically handled by `npm run db:push` during development
// Use this function only if you need programmatic migration control
