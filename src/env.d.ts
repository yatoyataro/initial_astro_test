/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.css' {
  const content: string;
  export default content;
}