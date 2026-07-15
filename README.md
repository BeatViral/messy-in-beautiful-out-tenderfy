# Messy In → Beautiful Out — Tenderfy concept

An independent, story-first product demonstration exploring how fragmented project knowledge could become structured, evidence-backed tender work.

This is a concept by Mahmood Matloob. It is not an official Tenderfy product and does not imply endorsement, partnership, or affiliation.

## What it demonstrates

A project manager contributes a realistic delivery story through messages, a voice note, and supporting files. A deterministic local sequence then captures measurable evidence, separates documented facts from human contribution, identifies what still needs verification, and prepares tender-ready material for bid-manager review.

The page is deliberately static: it uses no backend, database, authentication, live WhatsApp integration, paid API, external AI service, or fake network call. All content and metrics are illustrative local demo data.

## Current scenario

The default Tenderfy concept follows Alex, a Northline Civil project manager, contributing knowledge from the fictional Kingscliff Pump Station Upgrade. Visitors can also replay short programme-recovery, safety-improvement, and stakeholder-management contributions. Each story captures documented evidence, a human contribution, and one claim that remains visibly unverified until confirmed.

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

This is the reusable baseline for future company-specific versions. See [TEMPLATE.md](TEMPLATE.md) for the required inputs and delivery checklist. In a new task, provide a company brief and a target GitHub repository; a company URL can be included as supporting research. The generator must investigate the company, avoid duplicating an existing feature, and decline to force the concept when there is no credible opportunity.

## Disclaimer

Independent product concept. Not affiliated with or endorsed by Tenderfy. All company and product names belong to their respective owners. Demonstration content and metrics are illustrative.
