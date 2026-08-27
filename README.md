# Designally

Design agency website and content studio.

## Workspace

- `apps/web` — public Next.js website
- `apps/studio` — Sanity content studio
- `packages/ui` — shared design tokens and UI components
- `packages/eslint-config` — shared lint rules
- `packages/typescript-config` — shared TypeScript settings

## Requirements

- Node.js 24 LTS
- pnpm 11

## Setup

```bash
pnpm install
cp apps/studio/.env.example apps/studio/.env.local
pnpm dev
```

Before connecting Sanity Studio, create or select a Sanity project and add its
project ID and dataset to `apps/studio/.env.local`.

## Checks

```bash
pnpm check-types
pnpm lint
pnpm format:check
pnpm test
pnpm build
pnpm audit
```
