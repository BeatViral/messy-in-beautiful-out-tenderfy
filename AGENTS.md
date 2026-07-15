# Messy In → Beautiful Out company-demo factory

This repository is the reference implementation for a reusable, static product-concept format. Company-specific content belongs primarily in `src/config/company.ts` and `src/data/scenario.ts`; reusable components should remain company-neutral.

## Generate a new company version

The only required input is:

```text
COMPANY_URL
```

1. Study the public company website and understand what the company already offers.
2. Identify its customer, workflow, and the valuable outcome the customer ultimately wants.
3. Find an unresolved part of that workflow where input still arrives fragmented, informal, incomplete, or difficult to structure.
4. Do not duplicate an existing company feature.
5. Decide honestly whether a strong Messy In → Beautiful Out opportunity exists. If it does not, explain why instead of forcing a chatbot concept.
6. Select one realistic, high-value user story.
7. Replace the company configuration and scenario data while preserving the reusable components and shared visual system.
8. Generate both the messy input and the beautiful operational output, with explicit evidence provenance and realistic local-only demonstration data.
9. Update titles, metadata, links, repository base path, README, and deployment configuration.
10. Clearly label the experience as an independent product concept with no implied endorsement, affiliation, or partnership.

Do not ask for a preferred example, logo upload, optional notes, job advertisement, or suggested opportunity. Discover the opportunity from the company website itself.

## Quality rules

- Keep the project static and GitHub Pages compatible.
- Do not use live AI, authentication, databases, paid APIs, or fake network calls.
- Keep TypeScript strict and avoid `any`.
- Preserve source-to-output distinctions: written source, human contribution, inferred connection, and still unverified.
- Do not invent company claims, customer outcomes, partnerships, or credentials.
- Run `pnpm run build` and test desktop and mobile layouts before publishing.
