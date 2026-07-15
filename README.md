# Messy In → Beautiful Out — Tenderfy concept

An independent, story-first product demonstration exploring how fragmented project knowledge could become structured, evidence-backed tender work.

This is a concept by Mahmood Matloob. It is not an official Tenderfy product and does not imply endorsement, partnership, or affiliation.

## What it demonstrates

A bid manager contributes a realistic project story through messages, a voice note, and documents. A deterministic local sequence then shows the story being mapped into tender requirements, evidence, gaps, owners, review actions, and a polished submission preview.

The page is deliberately static: it uses no backend, database, authentication, live WhatsApp integration, paid API, external AI service, or fake network call. All content and metrics are illustrative local demo data.

## Current scenario

The Tenderfy concept follows Northline Civil's response to the fictional North Coast Water Treatment Upgrade tender. The story reveals useful Kingscliff Pump Station evidence, a programme conflict, missing commissioning information, and a staged continuity-of-operations methodology.

## Technology

- React and strict TypeScript
- Vite
- Tailwind CSS plus a bespoke CSS visual system
- Framer Motion
- Lucide React icons
- pnpm
- GitHub Pages and GitHub Actions

## Run locally

```bash
pnpm install
pnpm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
pnpm run build
pnpm run preview
```

The build output is written to `dist/`.

## GitHub Pages deployment

The Vite base path is configured for `messy-in-beautiful-out-tenderfy`. Pushes to `main` run `.github/workflows/deploy.yml`, build the site, and deploy the `dist` artifact through GitHub Pages Actions. In the repository settings, Pages must use **GitHub Actions** as its source.

Expected URL: `https://beatviral.github.io/messy-in-beautiful-out-tenderfy/`

## Reusable company configuration

Company-specific narrative and links live in `src/config/company.ts`. Scenario-specific messages, documents, evidence, requirements, metrics, and submission copy live in `src/data/scenario.ts`. The components in `src/components/` consume those typed objects and should remain reusable.

## Create a future company version with Codex

Give Codex only a public `COMPANY_URL` and use `prompts/generate-company-demo.md`. The repository-level `AGENTS.md` describes the research, opportunity-selection, integrity, implementation, and validation rules. The generator must investigate the company, avoid duplicating an existing feature, and decline to force the concept when there is no credible opportunity.

## Disclaimer

Independent product concept. Not affiliated with or endorsed by Tenderfy. All company and product names belong to their respective owners. Demonstration content and metrics are illustrative.
