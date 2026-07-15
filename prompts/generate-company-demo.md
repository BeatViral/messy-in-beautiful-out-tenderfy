# Generate a Messy In → Beautiful Out company demo

Input:

```text
COMPANY_URL={{COMPANY_URL}}
```

Create a new independent product-concept implementation from this URL alone.

## Discovery

Study the public website. Determine what the company currently offers, who buys it, what job those customers are trying to finish, and where valuable input still arrives fragmented or informally. Do not reproduce an existing feature. Decide whether a meaningful story-to-structure opportunity genuinely exists. If none exists, stop and explain the conclusion rather than forcing a conversational interface.

## Scenario selection

Choose the strongest realistic contributor, messy input, and finished operational object. The conversation is only an intake surface; the product value must be the structured work created from it. Use carefully designed local demonstration data and maintain explicit provenance for every output.

## Implementation

1. Update `src/config/company.ts` with the company, positioning, independent-concept language, links, opportunity, principles, builder context, and footer disclaimer.
2. Update `src/data/scenario.ts` with the contributor story, attachments, processing steps, metrics, requirements, evidence, gaps, conflicts, owners, and polished finished output.
3. Keep reusable components company-neutral.
4. Preserve the premium architectural visual system unless the researched company context requires a carefully justified adaptation.
5. Update page metadata, canonical and social URLs, favicon/preview assets, Vite base path, Pages workflow, and README.
6. Do not add a backend, API key, authentication, live messaging integration, database, external AI call, or fake request.
7. Clearly identify illustrative data and distinguish verified sources from human contributions, inferred connections, and unverified facts.
8. Run `pnpm run build`, then inspect the complete experience at desktop and mobile sizes.

The result must let a company founder understand the proposed extension in under ten seconds and must never imply endorsement or affiliation.
