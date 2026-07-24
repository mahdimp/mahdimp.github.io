export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  link?: { href: string; label: string };
  /** Internal note only — never rendered. Tracks what still needs sign-off before this goes live as-is. */
  status?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'straiv-hardware',
    title: 'Front-desk hardware integration at straiv',
    summary:
      'straiv builds guest-facing hotel software. I work on the check-in flow that integrates with front-desk hardware — ID scanners, keycard encoders, and self-service kiosks — using vendor SDKs from the browser.',
    stack: ['Angular', 'TypeScript', 'RxJS'],
    status:
      'DRAFT — needs manager sign-off before publishing (agreed: write at public-vendor-SDK altitude, no internal specifics or exact hotel-count figure until approved).',
  },
  {
    slug: 'nx-migration',
    title: 'Nx monorepo migration',
    summary:
      'Migrated a set of separate Angular applications into a single Nx monorepo to share code and tooling across projects.',
    stack: ['Angular', 'Nx', 'TypeScript'],
    status: 'PLACEHOLDER — replace with real specifics (what was migrated, before/after numbers, team size).',
  },
  {
    slug: 'dubai-police-fms',
    title: 'Fleet Management System — Dubai Police',
    summary:
      'Frontend developer on a Fleet Management System built for Dubai Police to manage their vehicle fleet. Angular on the frontend, Java on the backend.',
    stack: ['Angular', 'TypeScript', 'Java'],
    status: 'DRAFT — confirm no NDA/confidentiality restriction before publishing.',
  },
  {
    slug: 'deckle',
    title: 'Deckle — spaced-repetition flashcards',
    summary:
      'A frictionless flashcard app that runs entirely client-side — no backend, no account. Uses the FSRS scheduling algorithm (the same one Anki now defaults to), IndexedDB for storage, and works offline as an installable PWA.',
    stack: ['Angular', 'Dexie/IndexedDB', 'Tailwind CSS'],
    link: { href: 'https://github.com/mahdimp/deckle', label: 'Repository' },
    status:
      'TODO — repo is still private; once made public and the Pages workflow deploys, switch this link to the live app at mahdimp.github.io/deckle/.',
  },
];
