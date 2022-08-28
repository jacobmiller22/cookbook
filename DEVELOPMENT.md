# Getting started with Cookbook development

## Starting the next client (frontend)

In order to start the frontend. Navigate to the `/client` directory.

Install the necessary dependencies by optionally cleaning by removing the `node_modules` folder, then running `npm install`

Setup the necessary environment files. Run `touch .env.local`. Within this file there are 3 keys that must be added:

- USERFRONT_ID
- UF_API_KEY
- UF_WH_API_KEY

Run the dev server with `npm run dev`

## Connecting to the PlanetScale Database

Login to planetscale with `pscale login` and follow the prompt.

Connect to the main branch with `pscale connect --port 3302 cookbook main`

Connect to the shadow branch in a separate terminal using pscale connect --port 3301 cookbook shadow

Install prisma locally with `npx prisma --save-dev`

Open the prisma studio in a separate terminal by running `prisma studio` to visualize the db.
