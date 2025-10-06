import { betterAuth } from "better-auth";
import { Pool } from "pg";
import process from "process";
const { POSTGRES_CONN_STR, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } =
  process.env;

export const auth = betterAuth({
  database: new Pool({
    connectionString: POSTGRES_CONN_STR,
  }),

  socialProviders: {
    github: {
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    },
  },
});
