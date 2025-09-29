import { betterAuth } from "better-auth";
import { Pool } from "pg";
import process from "process";

const {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
} = process.env;

export const auth = betterAuth({
  database: new Pool({
    connectionString: `postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`,
  }),
  // emailAndPassword: { enabled: true },
  socialProviders: {
    github: {
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    },
  },
});
