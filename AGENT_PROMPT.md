# Portfolio UI Implementation Guide

## Overview
Build a modern, minimal portfolio website with a bento-grid layout, clean white background, orange/blue accents, and smooth micro-interactions. The design features cards with depth/inset styling, generous whitespace, and rounded corners.

---

## Design System

### Color Palette (5 colors max)
```css
/* Primary Colors */
--background: oklch(0.985 0 0);     /* Off-white background */
--foreground: oklch(0.145 0 0);     /* Near-black text */
--primary: oklch(0.145 0 0);        /* Black for buttons */
--primary-foreground: oklch(0.985 0 0); /* White text on buttons */

/* Accent Colors */
--orange: oklch(0.705 0.191 41.5);  /* Orange for highlights (company names, metrics) */
--blue: oklch(0.623 0.214 259);     /* Blue for tech tags, learning items */
--green: oklch(0.723 0.191 142.5);  /* Green for status indicators */

/* Supporting Colors */
--muted: oklch(0.97 0 0);           /* Light gray for card backgrounds */
--muted-foreground: oklch(0.45 0 0); /* Gray for secondary text */
--border: oklch(0.92 0 0);          /* Subtle border color */
```

### Typography
- **Font**: Geist Sans (or Inter/SF Pro as fallback)
- **Headings**: Bold (700), tracking-tight
- **Body**: Regular (400), leading-relaxed
- **Hero Title**: Mix of black and gray60% text for visual hierarchy
  - Example: "Hi, I'm" (gray60) + "Bhuvesh!" (black)
  - Company name in orange: "Oracle Singapore"

### Card Styling - Depth Effect
The key visual feature is cards with inset shadow that creates depth:
```css
/* Card base styles */
border border-neutral-200/80 
shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_3px_0_rgba(0,0,0,0.04)]

/* Card hover */
hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_8px_24px_-4px_rgba(0,0,0,0.08)]
hover:-translate-y-0.5
```

### Border Radius
```css
--radius: 1rem;        /* Base radius for cards (rounded-2xl) */
```

---

## Page Sequence
```
1. Hero Banner
2. Bento Grid (Experience, Education preview, Focus Areas, Map)
3. Education Section (full, row-based cards)
4. Featured Projects (row-based layout)
5. Other Projects (grid layout)
6. Skills Section (categorized grid)
7. Let's Work Together (contact CTA)
8. Footer
```

---

## Component Architecture

### 1. Header
```
┌─────────────────────────────────────────────────────┐
│ [Logo]  email@domain.com                   [☰ Menu] │
└─────────────────────────────────────────────────────┘
```
- Sticky with backdrop blur
- Orange dot next to logo

### 2. Hero Section
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Hi, I'm [AVATAR] Bhuvesh!                         │
│  I'm a Software Engineer at                         │
│  Oracle Singapore.  [● Open to work]               │
│                                                     │
│  [Get in touch]  Feel free to explore...           │
│                                                     │
└─────────────────────────────────────────────────────┘
```
- Avatar inline with text (48x48px)
- "Open to work" badge with pulsing green dot
- Black filled button for CTA

### 3. Bento Grid Section (4 cards)
```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ My Experience│ │  Education   │ │ Focus Areas  │
│              │ │              │ │              │
│ ● Role 2024  │ │ ● MTech AI   │ │ [AI/ML] [LLM]│
│ ○ Role 2023  │ │ ○ GradDip    │ │ [Dev] [Cloud]│
│ ○ Role 2022  │ │ ○ BSc CS     │ │              │
└──────────────┘ └──────────────┘ └──────────────┘
┌──────────────┐
│     Map      │
│  SINGAPORE   │
│  1.35°N...   │
└──────────────┘
```

### 4. Experience/Education Timeline Dots
```
● Current/First (orange dot)
○ Past/Others (gray dot)
│ Vertical line connecting
```

### 5. Education Section (Full, Row-based)
```
┌─────────────────────────────────────────────────────┐
│ [🎓] MTech in AI Systems                [In Progress]│
│      NUS-ISS · Singapore · Jan 2026 – Dec 2028      │
│      Coursework: CV, Deep Learning, NLP...          │
│                                          GPA: 4.92/5│
└─────────────────────────────────────────────────────┘
```
- Icon on left
- Status badge for current
- GPA/achievement on right

### 6. Featured Projects (Row Layout)
```
┌─────────────────────────────────────────────────────┐
│ [Oracle] [✓ Shipped]                      [Links]   │
│ JMS AI Toolkit                                      │
│ AI-Powered Test Generation                          │
│                                                     │
│ Built an AI-powered toolkit that...    ┌──────────┐│
│                                        │   60%    ││
│ [Python] [LangChain] [OpenAI]          │ Faster   ││
│                                        └──────────┘│
└─────────────────────────────────────────────────────┘
```
- Horizontal layout with metric on right
- **Metric value**: `text-xl font-bold text-orange` (smaller than before)
- **Tech tags**: `bg-blue/8 text-blue` (blue colored)
- **Status badges**:
  - Shipped: green bg/text
  - In Progress: orange bg/text

### 7. Skills Section
```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Languages    │ │ ML Core     │ │ Deep Learning│
│ [icon]       │ │ [icon]      │ │ [icon]       │
│              │ │             │ │              │
│ [Java]       │ │ [Supervised]│ │ [PyTorch]    │
│ [Python]     │ │ [Ensemble]  │ │ [TensorFlow] │
└──────────────┘ └──────────────┘ └──────────────┘
```
Each category has:
- Icon with colored background
- Category label
- Skill pills in matching color

Color mapping:
- Languages: blue
- ML Core: purple
- Deep Learning: green
- NLP: cyan
- LLMs & Agents: orange
- Frameworks: pink
- Infrastructure: slate

### 8. Contact Section
```
┌─────────────────────────────────────────────────────┐
│              Let's work together                    │
│     I'm open to AI/ML engineering opportunities     │
│                                                     │
│    [Send me an email]  [Connect on LinkedIn]        │
│                                                     │
│          [GitHub] | [LinkedIn] | [Email]            │
└─────────────────────────────────────────────────────┘
```

---

## Animation Patterns

### Hover Micro-interactions
```tsx
// Card hover
className="hover:-translate-y-0.5 transition-all duration-300"
```

### Pulsing Status Dot
```tsx
<span className="relative flex h-2 w-2">
  <span className="animate-ping absolute h-full w-full rounded-full bg-green opacity-75" />
  <span className="relative rounded-full h-2 w-2 bg-green" />
</span>
```

---

## Key Implementation Details

### 1. Card Depth Effect (IMPORTANT)
The reference design has a distinct inset/depth feel:
```tsx
className={cn(
  "rounded-2xl bg-card p-5",
  "border border-neutral-200/80",
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_3px_0_rgba(0,0,0,0.04)]",
  "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_8px_24px_-4px_rgba(0,0,0,0.08)]"
)}
```

### 2. Timeline Dot Styling
```tsx
<div className={cn(
  "w-2 h-2 rounded-full",
  isCurrent ? "bg-orange" : "bg-neutral-300"
)} />
```

### 3. Tech Stack Pills (Blue)
```tsx
<span className="bg-blue/8 px-2 py-0.5 text-xs font-medium text-blue rounded-md">
  {tech}
</span>
```

### 4. Metric Display (Smaller)
```tsx
<div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-center">
  <span className="text-xl font-bold text-orange">{value}</span>
  <p className="text-[10px] text-muted-foreground">{label}</p>
</div>
```

### 5. Map Card with Street Pattern
SVG with:
- Main roads (4px stroke)
- Secondary roads (2px)
- Tertiary roads (1px)
- Curved roads
- Building blocks (filled rectangles)
- Center marker dot

---

## File Structure
```
components/
├── header.tsx              # Sticky nav
├── hero-section.tsx        # Hero with avatar, badge
├── status-badge.tsx        # "Open to work" component
├── bento-card.tsx          # Base card with depth effect
├── bento-grid-section.tsx  # 4-card grid
├── experience-timeline.tsx # Timeline with dots
├── education-card.tsx      # Bento preview card
├── focus-areas-card.tsx    # Skills tags
├── location-card.tsx       # Map SVG
├── education-section.tsx   # Full education rows
├── project-card.tsx        # Featured + compact variants
├── projects-section.tsx    # Featured + other projects
├── skills-section.tsx      # Categorized skills grid
├── contact-section.tsx     # CTA and social links
└── footer.tsx

data/
├── site.ts                 # Personal info, socials
├── experience.ts           # Work history, education, skills
└── projects.ts             # Project details

app/
├── globals.css             # Design tokens
├── layout.tsx              # Root layout
└── page.tsx                # Main page
```

---

## Quick Start Checklist
1. [ ] Set up color tokens (orange, blue, green in globals.css)
2. [ ] Create BentoCard with depth shadow effect
3. [ ] Build Header with orange dot logo
4. [ ] Build Hero with inline avatar and status badge
5. [ ] Build Experience and Education timeline cards
6. [ ] Build Focus Areas with colored tags
7. [ ] Build Location card with detailed street map SVG
8. [ ] Build Education Section with row layout
9. [ ] Build Project Cards (featured=row, compact=grid)
10. [ ] Build Skills Section with category colors
11. [ ] Add Contact Section
12. [ ] Test responsive behavior
