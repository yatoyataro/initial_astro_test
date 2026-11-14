# Terminal portfolio

A terminal-styled personal portfolio built with [Astro](https://astro.build) and React,
deployed to GitHub Pages with GitHub Actions.

Live site: https://yatoyataro.github.io/portfolio_terminal/

## Commands

| Command           | What it does                                                        |
| ----------------- | ------------------------------------------------------------------- |
| `npm install`     | Install dependencies                                                |
| `npm run dev`     | Start the dev server at `http://localhost:4321/portfolio_terminal/` |
| `npm run build`   | Build the production site into `dist/`                              |
| `npm run preview` | Serve the production build locally                                  |
| `npm run check`   | Type-check Astro, TypeScript and React files                        |
| `npm run lint`    | Lint with Biome                                                     |
| `npm run format`  | Format all files with Biome                                         |
| `npm run verify`  | Everything CI runs: lint + format check, type check, build          |

Requires Node 22.23.4 or newer (`.nvmrc` pins Node 24 for CI).

## Editing the content

All text lives in `src/data/`:

- `profile.ts`: name, title, contact details, bio (set `resumeFile` to show a CV button)
- `projects.ts`: project cards
- `skills.ts`, `experience.ts`: the Intel section
- `src/assets/portrait.jpg`: the hero portrait (square, about 1200px). Strip camera metadata
  before committing. Its alt text and the card's text lines live in `profile.ts`.

Colours and spacing are CSS variables in `src/styles/global.css`.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`: lint, type check, build, then deploy.
Pull requests run the same checks but are never published.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The site address is derived from the repository name (`astro.config.mjs`), so renaming the
repository or forking it needs no code change. For a custom domain, set the `SITE_URL` and
`BASE_PATH` environment variables when building.

## Contact form

The site is static, so the form opens the visitor's own email app with the message pre-filled.
To send messages from the page itself, swap `handleSubmit` in
`src/components/sections/UplinkSection.tsx` for a form service such as Formspree or Web3Forms.
