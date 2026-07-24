export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  link?: { href: string; label: string };
  /** When true, SelectedWork.astro excludes this card from the rendered page — actual gate, not just a note. */
  draft?: boolean;
  /** Internal note only — never rendered. Context for why a card is (or isn't) a draft, or other follow-ups. */
  note?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'straiv-hardware',
    title: 'Front-desk hardware integration at straiv',
    summary:
      'straiv builds guest-facing hotel software. I work on the check-in flow that integrates with front-desk hardware — ID scanners, keycard encoders, and self-service kiosks — using vendor SDKs from the browser.',
    stack: ['Angular', 'TypeScript', 'RxJS'],
    note: 'Reviewed 2026-07-24 — no confidential specifics (vendor names, internal architecture) included. Approved to publish.',
  },
  {
    slug: 'nx-migration',
    title: 'Nx monorepo migration',
    summary:
      'Migrated a set of separate Angular applications into a single Nx monorepo to share code and tooling across projects.',
    stack: ['Angular', 'Nx', 'TypeScript'],
    draft: true,
    note: 'PLACEHOLDER — replace with real specifics (what was migrated, before/after numbers, team size), then clear draft flag.',
  },
  {
    slug: 'dubai-police-fms',
    title: 'Fleet Management System — Dubai Police',
    summary:
      'Frontend developer on a Fleet Management System built for Dubai Police to manage their vehicle fleet. Angular on the frontend, Java on the backend.',
    stack: ['Angular', 'TypeScript', 'Java'],
    note: 'Reviewed 2026-07-24 — no confidential specifics included. Approved to publish.',
  },
  {
    slug: 'deckle',
    title: 'Deckle — spaced-repetition flashcards',
    summary:
      'A frictionless flashcard app that runs entirely client-side — no backend, no account. Uses the FSRS scheduling algorithm (the same one Anki now defaults to), IndexedDB for storage, and works offline as an installable PWA.',
    stack: ['Angular', 'Dexie/IndexedDB', 'Tailwind CSS'],
    link: { href: 'https://github.com/mahdimp/deckle', label: 'Repository' },
    note: 'TODO — repo is still private; once made public and the Pages workflow deploys, switch this link to the live app at mahdimp.github.io/deckle/.',
  },
];
