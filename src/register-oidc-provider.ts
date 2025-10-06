import { auth } from "./auth";

const {
  MS_ENTRA_CLIENT_ID,
  MS_ENTRA_CLIENT_SECRET,
  MS_ENTRA_CLIENT_TENANT_ID,
} = process.env;

await auth.api.registerSSOProvider({
  body: {
    domain: "dfds.tools",
    issuer: `https://login.microsoftonline.com/${MS_ENTRA_CLIENT_TENANT_ID}/v2.0`,
    providerId: "microsoft",
    oidcConfig: {
      clientId: MS_ENTRA_CLIENT_ID,
      clientSecret: MS_ENTRA_CLIENT_SECRET,

      // endpoints are found in discovery endpoint below, just paste it on your browser
      authorizationEndpoint: `https://login.microsoftonline.com/${MS_ENTRA_CLIENT_TENANT_ID}/oauth2/v2.0/authorize`,
      tokenEndpoint: `https://login.microsoftonline.com/${MS_ENTRA_CLIENT_TENANT_ID}/oauth2/v2.0/token`,
      jwksEndpoint: `https://login.microsoftonline.com/${MS_ENTRA_CLIENT_TENANT_ID}/discovery/v2.0/keys`,
      discoveryEndpoint: `https://login.microsoftonline.com/${MS_ENTRA_CLIENT_TENANT_ID}/v2.0/.well-known/openid-configuration`,
      scopes: ["openid", "email", "profile", "offline_access"],
      pkce: true,
    },
  },
});
