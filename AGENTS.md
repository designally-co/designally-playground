# Designally coding guidelines

This repository contains the Designally agency website and its content studio.

## Research before changing technology

Before adding or updating a dependency:

1. Read the current official documentation.
2. Check the official package registry and release notes.
3. Confirm compatibility with Node.js, pnpm, Next.js, React, TypeScript,
   Tailwind CSS, and Sanity.
4. Check security notices and breaking changes.
5. Use stable releases only unless the user clearly approves a preview release.

Do not guess package APIs or configuration fields. Prefer existing dependencies
when they solve the problem well.

## Project rules

- The website is in `apps/web`.
- Sanity Studio is in `apps/studio`.
- Shared UI and design tokens are in `packages/ui`.
- Shared lint and TypeScript configuration are in `packages/eslint-config` and
  `packages/typescript-config`.
- Use design tokens instead of hardcoded brand colours in components.
- Keep content models structured and reusable.
- Do not copy Ferre branding, content, project IDs, or medical components.

After meaningful changes, run `pnpm check-types`, `pnpm lint`,
`pnpm format:check`, `pnpm test`, and `pnpm build`.
