import { ssoClient } from "@better-auth/sso/client";
import { createAuthClient } from "better-auth/client";

export const { signIn, signUp, signOut, useSession, sso } = createAuthClient({
  baseURL: "http://localhost:3000",
  plugins: [ssoClient()],
});
