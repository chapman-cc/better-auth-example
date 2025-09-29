## Prerequisite

you need docker compose to run postgres

## Step

1. set BETTER_AUTH_SECRET, better-auth cli tool can generate one
1. follow [this guide](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) create github oauth app
1. open 2 terminals
1. on T1, in root, run `docker compose up`
1. on T2, run `pnpm dev`
