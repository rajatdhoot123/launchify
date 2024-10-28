import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const drizzle_config = {
  schema: "./src/lib/database/*",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
};

export default drizzle_config;
