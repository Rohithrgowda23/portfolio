# Rohith R Gowda — Portfolio

A premium, single-page developer portfolio built with React 19, TypeScript, Vite,
Tailwind CSS, Framer Motion, Three.js and Lenis smooth scroll.

## Stack

- **React 19 + Vite + TypeScript** — app shell and build tooling
- **Tailwind CSS** — design tokens (colors, radii, shadows) in `tailwind.config.js`
- **Framer Motion** — scroll reveals, hover states, page transitions
- **Three.js** — the reactive particle-network background in the hero
- **Lenis** — smooth, eased scrolling
- **EmailJS** — the contact form sends mail without a backend
- **Lucide Icons** — iconography (GitHub/LinkedIn use custom SVGs, since brand
  logos were removed from lucide-react in recent versions)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Contact form (EmailJS)

The contact form is wired to EmailJS but needs your own credentials:

1. Create a free account at https://www.emailjs.com/
2. Create an Email Service and a Template with `from_name`, `from_email`,
   `message` variables.
3. Copy `.env.example` to `.env` and fill in:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Until configured, submitting the form shows a friendly inline error instead of
failing silently.

## Content you'll want to personalize

- `src/constants/index.ts` — name, tagline, email, phone, resume path, socials
- `src/data/projects.ts` — project copy, tech, links
- `src/data/skills.ts` — skill groups
- `src/data/experience.ts` — internship, education, certifications
- `src/components/sections/GithubStats.tsx` — swap the placeholder numbers for
  a live GitHub API call if you want real-time contribution stats
- `public/resume.pdf` — drop your actual resume here (referenced by the
  Download Resume buttons)
- `src/components/sections/About.tsx` — replace the Unsplash portrait with
  your own photo

## Folder structure

```
src/
  components/
    layout/      Navbar, Footer, PageLoader, CursorGlow
    sections/    Hero, About, Skills, Projects, Experience, GithubStats, Contact
    ui/          MagneticButton, SectionHeading, BrandIcons
  hooks/         useLenis, useMousePosition, useCountUp
  animations/    heroScene (Three.js)
  constants/     site copy & nav config
  data/          skills, projects, experience/education/certifications
  services/      emailService (EmailJS wrapper)
```

## Build

```bash
npm run build
npm run preview
```

## Notes

- Respects `prefers-reduced-motion`.
- Fully responsive from mobile up.
- Colors follow the fixed palette: background `#09090B`, surface `#111827`,
  primary `#2563EB`, secondary `#7C3AED`, accent `#06B6D4`.
