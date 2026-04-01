# Bhuvesh Kumar Portfolio

A production-ready personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, shadcn-style UI primitives, and Motion.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Motion for React
- Lucide React
- Radix Dialog

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000`.

## Project structure

```text
app/
components/
data/
lib/
types/
```

Content is separated from presentation so project, experience, and contact updates can be made in:

- `data/site.ts`
- `data/projects.ts`
- `data/experience.ts`

## Deployment

This app is designed to deploy cleanly on Vercel with no required environment variables for v1.

## Notes

- Replace `siteData.url` in `data/site.ts` with the deployed production URL.
- Update social links, email, and resume destination in `data/site.ts`.
- Project detail pages are generated from `data/projects.ts`.
