# Living Textbook

Living Textbook is a React + Vite study platform for Pearson Edexcel International A-Level and IGCSE learners.

## Active Stack

- Frontend: React 19, Vite 7, React Router 7, vanilla CSS
- Backend: Convex
- Auth: Clerk, with anonymous and debug fallbacks for development and mobile regression tests
- Testing: Node test runner plus Playwright mobile regression coverage

Convex is the only supported backend path. The historical SpacetimeDB backend has been removed from the product repo.

## Commands

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run lint:all
npm run test
npm run test:e2e:mobile
npm run convex:deploy
```

## Environment Variables

Create `.env.local` with the values required for your environment:

```bash
VITE_CONVEX_URL=https://<your-convex-deployment>.convex.cloud
VITE_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
```

## Deployment

- Frontend hosting is standardized for root-path deployment behind `vercel.json`
- Backend deployment is handled through `npx convex deploy`
- GitHub Actions block backend deploys unless lint, tests, and build succeed

## Repository Boundaries

- `src/` contains the application runtime
- `convex/` contains the active backend schema, queries, mutations, and HTTP actions
- `public/` contains static PDFs, past papers, and PWA assets
- `scripts/` contains support and content pipeline utilities

Assessment artifacts and the current migration backlog live in `docs/modernization/`.
