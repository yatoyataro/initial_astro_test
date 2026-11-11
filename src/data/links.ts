import { profile } from "./profile";

export interface Link {
  label: string;
  url: string;
}

/** Links shown in the "02 // CONNECTION" sidebar panel. Single source: profile.ts */
export const sidebarLinks: Link[] = [
  { label: "EMAIL_CLIENT", url: `mailto:${profile.email}` },
  { label: "GITHUB_SYNC", url: profile.github },
  { label: "LINKEDIN_CONNECT", url: profile.linkedin },
];
