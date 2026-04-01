# Bhuvesh Kumar Portfolio

Personal portfolio site built with Next.js 16, React 19, and Tailwind CSS 4. The site presents work experience, featured AI/ML projects, education, certifications, skills, community work, and contact details in a lightweight single-page layout, with dedicated project detail pages under `/projects/[id]`.

## Overview

This repo powers a portfolio focused on:

- software engineering and AI/ML positioning
- enterprise Oracle work and internal AI tooling
- education, certifications, and current learning areas
- project deep-dives with dedicated detail pages
- recruiter-friendly presentation for AI/ML roles

The homepage is component-driven and most profile content lives in local TypeScript data files rather than a CMS or database.

## Tech Stack

- Next.js 16.2.0
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- `lucide-react` for icons
- Radix UI primitives for interactive UI pieces
- Vercel Analytics

## Project Structure

```text
.
├── app/
│   ├── layout.tsx              # Global metadata, fonts, icons
│   ├── page.tsx                # Homepage composition
│   └── projects/[id]/page.tsx  # Dynamic project detail pages
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── hero-section.tsx
│   ├── experience-section.tsx
│   ├── education-section.tsx
│   ├── projects-section.tsx
│   ├── skills-section.tsx
│   ├── community-section.tsx
│   └── ui/                     # Reusable UI primitives
├── data/
│   ├── site.ts                 # Core identity, hero copy, stats, socials
│   ├── experience.ts           # Experience, education, certifications, skills, community
│   └── projects.ts             # Featured and supporting project content
├── public/                     # Static assets served from site root
├── lib/
├── hooks/
├── next.config.mjs
└── package.json
```

## Homepage Sections

The homepage currently renders in this order:

1. Hero
2. Bento grid
3. Work Experience
4. Education
5. Projects
6. Skills & Technologies
7. Community & Leadership
8. Contact
9. Footer

## Content Model

Most site content is edited in `data/`:

### `data/site.ts`

Use this file for:

- name and hero title
- subtitle and summary paragraph
- avatar path
- email and social links
- hero stats
- focus areas
- currently learning tags

### `data/experience.ts`

Use this file for:

- work experience cards
- education entries
- certifications list
- community and leadership items
- skills section tag groups

### `data/projects.ts`

Use this file for:

- featured and non-featured projects
- project tech stacks
- metrics
- detail-page content blocks
- architecture notes
- diagrams and gallery placeholders

## Static Assets

All browser-served assets must live in `public/`.

Important examples:

- avatar image: `public/avatar.jpg`
- favicon assets: `public/favicon.ico`, `public/icon-light-32x32.png`, `public/apple-icon.png`

Do not reference files from the repo root in UI code. Next.js only serves static files from `public/`.

## Local Development

### Prerequisites

- Node.js 18+ or 20+
- npm

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

App URL:

```text
http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

## Available Scripts

```bash
npm run dev    # Start Next.js dev server
npm run build  # Create production build
npm run start  # Run production server
npm run lint   # Run linting
```

## Deployment

This project is suitable for Vercel deployment out of the box.

### Recommended deployment flow

1. Push the repo to GitHub.
2. Import the repo into Vercel.
3. Use the default Next.js framework preset.
4. Deploy.

No database, environment variables, or backend services are required for the current version of the site.

## Customization Guide

### Update the avatar

1. Place the image in `public/`
2. Prefer lowercase filenames, for example `public/avatar.jpg`
3. Reference it from `data/site.ts`

```ts
avatar: "/avatar.jpg"
```

### Add or edit experience

Update the `experiences` array in `data/experience.ts`.

Fields supported:

- `role`
- `company`
- `location`
- `type`
- `mode`
- `startDate`
- `endDate`
- `description`
- `highlights`
- `techTags` for entries that need separate tech pills

### Add or edit certifications

Update the `certifications` array in `data/experience.ts`.

Featured certifications support:

```ts
featured: true
```

### Add or edit community items

Update the `communityRoles` array in `data/experience.ts`.

### Add or edit projects

Update the `projects` array in `data/projects.ts`.

Each project can power:

- homepage card
- project detail page
- metrics
- tech stack
- architecture and design sections
- media placeholders

## Styling Notes

- The site uses a consistent muted/orange-accent design language.
- Rounded cards, subtle borders, and low-contrast shadows are reused across sections.
- Changes should preserve the existing design system unless intentionally redesigning the whole site.

## Important Gotchas

### 1. Case-sensitive imports

This repo contains components with capitalized filenames such as:

- `components/Header.tsx`
- `components/Footer.tsx`

Import them with matching casing:

```ts
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
```

This matters on Linux and in production builds.

### 2. Static asset paths are case-sensitive on Vercel

macOS can hide filename mistakes because its default filesystem is case-insensitive. Vercel runs on Linux and is case-sensitive.

Correct example:

```ts
avatar: "/avatar.jpg"
```

Incorrect example:

```ts
avatar: "/avatar.JPG"
```

### 3. Put public assets in `public/`

Do not keep deployable images only at repo root. They will not be served by Next.js.

### 4. Restart dev server after config changes

If you edit `next.config.mjs`, stop and restart `npm run dev`.

This repo uses config for things like:

- dev indicator visibility
- image behavior
- allowed dev origins

## Current Notable Features

- hero with recruiter-focused positioning
- updated stats bar emphasizing AI process improvement
- collapsible older education entries
- certifications subsection inside education
- community and leadership section
- better.sg volunteer AI engineer role in experience
- dedicated project pages for selected portfolio projects
- custom favicon setup

## Troubleshooting

### Avatar works locally but not on Vercel

Check:

- file exists at `public/avatar.jpg`
- reference is exactly `"/avatar.jpg"`
- filename casing matches exactly

### Favicon not updating

Favicons are heavily cached by browsers. If the icon changes but you still see the old one:

- hard refresh the page
- reopen the tab
- clear browser favicon cache if needed

### `Module not found` for Header or Footer

Use the correct import casing:

```ts
@/components/Header
@/components/Footer
```

## Maintenance Workflow

Typical update cycle:

1. Edit content in `data/`
2. Update assets in `public/` if needed
3. Run `npm run build`
4. Verify the homepage and any touched project detail pages
5. Commit and deploy

## License

Personal portfolio project. Reuse the structure if useful, but replace personal content, branding, and assets before publishing your own version.
