# Reusable company-demo template

This repository is the canonical baseline for a tailored **Messy In → Beautiful Out** concept demo. It shows a credible product opportunity for a specific company without pretending that the page is a live product.

## What to provide for a new version

1. `COMPANY_BRIEF` — company name, public offer, target users, known constraints, and any useful links or source material.
2. `TARGET_REPOSITORY` — the GitHub repository URL for the new demo.
3. Optional visual or messaging constraints.

A company URL is useful research input, but the brief should establish what the company actually does and who it serves.

## Product idea to tailor

Keep the core interaction: an operational expert tells the story of work they delivered; the product extracts useful facts, distinguishes evidence from human claims, flags what needs verification, and prepares structured material for the team that needs to use it.

Find a genuine adjacent opportunity. It must add to the company's public offer rather than repeat it. If the research does not support one, explain that instead of inventing a feature.

## Keep consistent

- The concise, single-page case-study structure.
- The phone conversation flowing into a structured output panel.
- Clear documented evidence, human contribution, and verification-required states.
- The "Try another project story" selector with brief stories that demonstrate breadth.
- The polished responsive visual system and independent-concept language.

## Tailor per company

- Company diagnosis, opportunity, headline, closing insight, terminology, and visual details.
- Expert personas, project context, attachments, requirements, and prepared output.
- Story categories that reflect the knowledge valuable to that company's customers.
- Repository metadata, Vite base path, README, and deployment configuration.

## Evidence rules

- Source-backed facts are **documented evidence**.
- An expert's account is **human contribution**.
- Claims needing corroboration are **verification required**.
- The result is ready for an appropriate reviewer, never automatically approved or submitted.

Keep extra stories concise: one message, one voice note, one attachment, and one verification issue is usually enough.

## Delivery checklist

1. Read the brief and inspect supplied public sources.
2. Write a one-sentence diagnosis and a one-sentence opportunity statement.
3. Tailor `src/config/company.ts` and `src/data/scenario.ts`; preserve the interaction structure unless the brief requires a change.
4. Update page metadata, README, repository base path, and GitHub Pages configuration.
5. Run `pnpm run build` and visually inspect where available.
6. Commit deliberately, push to the target repository, and confirm deployment.

## Starting prompt for a new task

```text
Use the reusable company-demo template in BeatViral/messy-in-beautiful-out-tenderfy
(tag: company-demo-template-v1) to create a tailored concept demo.

COMPANY_BRIEF:
<paste the company brief, sources, and constraints>

TARGET_REPOSITORY:
<paste the new GitHub repository URL>
```
