# Accountstar website

A component-based rebuild of [accountstar.co.uk](https://www.accountstar.co.uk),
created with Astro and the Lumos framework. It preserves the public page,
content and link structure without carrying over Webflow's generated markup or
runtime.

## Local development

Node 22.12 or newer is required.

```sh
npm install
npm run dev
```

If the project lives in a directory containing emoji or other non-ASCII
characters, the current Astro/Vite toolchain may not start its development
server. In that case, use the production preview workflow:

```sh
npm run build
npm run preview
```

## Commands

| Command           | Purpose                                   |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the Astro development server        |
| `npm run check`   | Type-check all Astro and TypeScript files |
| `npm run build`   | Build the production site into `dist/`    |
| `npm run preview` | Preview the production build locally      |
| `npm run format`  | Format the codebase with Prettier         |

## Project structure

- `src/pages/` contains the required public routes. Empty Webflow template
  routes are intentionally not recreated.
- `src/data/site.ts` is the central source for services, testimonials, team
  profiles and contact details.
- `src/components/Sections/` contains the reusable page sections.
- `src/assets/images/` contains the locally hosted Accountstar imagery.

## Before launch

- Connect the financial plan download to its final file or email provider.
- Confirm any social profile URLs that should be published.
- Add redirect rules if existing URLs change during the domain cutover.
- Configure the chosen hosting provider and point the production domain after
  acceptance testing.
