import { sso } from "@better-auth/sso";
import { betterAuth } from "better-auth";
import { Pool } from "pg";
import process from "process";

const {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  MS_ENTRA_CLIENT_ID,
  MS_ENTRA_CLIENT_SECRET,
  MS_ENTRA_CLIENT_TENANT_ID,
} = process.env;

export const auth = betterAuth({
  database: new Pool({
    // ! keep this string as it is, joining it in .env is not going to work
    connectionString: `postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`,
  }),

  socialProviders: {
    github: {
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    },
    microsoft: {
      clientId: MS_ENTRA_CLIENT_ID,
      clientSecret: MS_ENTRA_CLIENT_SECRET,
      tenantId: MS_ENTRA_CLIENT_TENANT_ID,
      redirectURI: "http://localhost:3000/api/auth/callback/microsoft",
    },
  },
  plugins: [sso()],
});
