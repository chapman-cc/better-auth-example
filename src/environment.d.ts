declare namespace NodeJS {
  interface ProcessEnv {
    readonly GITHUB_CLIENT_ID: string;
    readonly GITHUB_CLIENT_SECRET: string;

    readonly MS_ENTRA_CLIENT_ID: string;
    readonly MS_ENTRA_CLIENT_SECRET: string;
    readonly MS_ENTRA_CLIENT_TENANT_ID: string;

    readonly DB_USER: string;
    readonly DB_PASSWORD: string;
    readonly DB_NAME: string;

    readonly PGADMIN_DEFAULT_EMAIL: string;
    readonly PGADMIN_DEFAULT_PASSWORD: string;
  }
}
