# Omar Mohamed Hosny — Portfolio

A modern, premium, highly interactive portfolio for **Omar Mohamed Hosny**, Front-End Developer.
Built with React 19, TypeScript, Tailwind CSS v4, Framer Motion and Lucide icons.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** (dev server & build)
- **Tailwind CSS v4** (via `@tailwindcss/vite`, design tokens in `src/index.css`)
- **Framer Motion** (motion)
- **Lucide React** + custom inline brand icons

## Features

- Sticky, blurring navbar with active-section indicator and animated mobile menu
- Hero with staggered load animation, typewriter-style title reveal and floating code window
- Scroll-reveal About, interactive Skills cards with animated proficiency bars
- Premium Projects showcase with scroll parallax, hover lift/zoom and animated tags
- Animated vertical Journey timeline that fills on scroll
- Services grid with animated icons and hover effects
- Contact section with CTA, copy-email button and accessible form
- Fully responsive (320px → 1440px+), reduced-motion aware, no horizontal overflow

## Scripts

```bash
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project structure

```
src/
  components/       section + UI components
    ui/             reusable primitives (Reveal, Magnetic, Background, ...)
  data/portfolio.ts all portfolio content & data
  hooks/            useActiveSection
  lib/              cn, motion variants
  index.css         design tokens, base styles, utilities
```

## Customizing

All content (name, links, skills, projects, journey, services) lives in
`src/data/portfolio.ts`. Update the GitHub/LinkedIn/email values there to point
at the real profiles.
