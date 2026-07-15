# Messy In → Beautiful Out company-demo factory

This repository is the reference implementation for a reusable, static product-concept format. Company-specific content belongs primarily in `src/config/company.ts` and `src/data/scenario.ts`; reusable components should remain company-neutral.

## Generate a new company version

Required inputs:

```text
COMPANY_BRIEF
TARGET_REPOSITORY
```

`COMPANY_URL` is optional supporting research, not a substitute for the brief.

1. Study the brief and supplied public sources to understand the current offer, customer, workflow, and desired outcome.
2. Find an unresolved part of that workflow where valuable input still arrives fragmented, informal, incomplete, or difficult to structure.
3. Do not duplicate an existing company feature.
4. Decide honestly whether a strong Messy In → Beautiful Out opportunity exists. If it does not, explain why instead of forcing a concept.
5. Replace company configuration and scenario data while preserving reusable components and the shared visual system.
6. Keep provenance explicit: documented evidence, human contribution, and verification required are distinct states.
7. Update titles, metadata, links, repository base path, README, and deployment configuration for the target repository.
8. Clearly label the experience as an independent product concept with no implied endorsement, affiliation, or partnership.

## Quality rules

- Keep the project static and GitHub Pages compatible.
- Do not use live AI, authentication, databases, paid APIs, or fake network calls.
- Keep TypeScript strict and avoid `any`.
- Do not invent company claims, customer outcomes, partnerships, or credentials.
- Keep alternate stories brief while showing different evidence types or roles.
- Run `pnpm run build` and test desktop and mobile layouts before publishing.
