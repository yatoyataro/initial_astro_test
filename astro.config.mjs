import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// GitHub Actions provides GITHUB_REPOSITORY as "owner/repo". Reading it means the site keeps
// working if the repository is renamed or forked. Locally it falls back to the values below.
// For a custom domain, set SITE_URL (e.g. https://example.com) and BASE_PATH ("/") when building.
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? "yatoyataro/initial_astro_test").split("/");
const isUserSite = repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export default defineConfig({
  site: process.env.SITE_URL ?? `https://${owner}.github.io`,
  base: process.env.BASE_PATH ?? (isUserSite ? "/" : `/${repo}/`),
  output: "static",
  integrations: [react()],
});
