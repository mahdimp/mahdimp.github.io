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
    slug: 'straiv-checkin',
    title: 'Guest check-in & kiosk applications at straiv',
    summary:
      'Built the guest-facing check-in and kiosk applications for straiv’s hotel platform — document capture, payment, keycard issuing, and mobile room access — so guests can complete check-in without queueing at reception.',
    stack: ['Angular', 'TypeScript', 'RxJS'],
    note: 'Reviewed 2026-07-24, aligned with the corrected CV wording (feature-level, no hardware/vendor-SDK claims). Approved to publish.',
  },
  {
    slug: 'nx-migration',
    title: 'Nx monorepo migration',
    summary:
      'Migrated a large Angular codebase into an Nx monorepo and extracted the kiosk application into its own buildable app, which shortened build and CI times and let the kiosk ship independently of the main product.',
    stack: ['Angular', 'Nx', 'TypeScript'],
    note: 'Real specifics added 2026-07-24 from the CV; draft flag cleared.',
  },
  {
    slug: 'dubai-police-systems',
    title: 'Insurance & Fleet Management Systems — Dubai Police',
    summary:
      'At JointScope Technologies, rebuilt a legacy Insurance Management System against a new API and revised requirements, and set up the project architecture, shared design system, and state management (NgRx) for a Fleet Management System, both for Dubai Police.',
    stack: ['Angular', 'TypeScript', 'NgRx'],
    note: 'Reviewed 2026-07-24 against the CV — no confidential specifics included. Approved to publish. (Dropped "Java backend" tag from the earlier draft — not corroborated by the CV.)',
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
