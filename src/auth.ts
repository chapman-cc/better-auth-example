import { betterAuth } from "better-auth";
import { Pool } from "pg";
import process from "process";

const {
  POSTGRES_CONN_STR,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  MS_ENTRA_CLIENT_ID,
  MS_ENTRA_CLIENT_SECRET,
  MS_ENTRA_CLIENT_TENANT_ID,
} = process.env;

export const auth = betterAuth({
  database: new Pool({
    connectionString: POSTGRES_CONN_STR,
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
});
