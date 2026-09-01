# Plan: Sourabh Raj — World-Class Portfolio Website

## Context
Build a premium personal portfolio for Sourabh Raj (srvraj311), a Senior SDE II with experience in Enterprise SaaS, Healthcare Tech, and AI. The goal is a top-1% engineering portfolio that communicates product thinking, technical depth, and leadership — not just a résumé. The user provided a comprehensive brief covering aesthetic direction, color system, typography, all sections, and content.

**Stance**: Minimalist-editorial — Apple/Stripe/Linear/Vercel DNA. One hero element, tight type, generous whitespace, controlled use of glassmorphism and subtle animation.

---

## Files to Modify

| File | Change |
|------|--------|
| `src/styles/fonts.css` | Add Google Fonts import for Inter Tight + Inter |
| `src/styles/theme.css` | Update tokens to dark mode palette |
| `src/app/App.tsx` | Full portfolio implementation |

---

## Design Tokens (`theme.css`)

Override `:root` and `.dark` to enforce dark-first palette:

```css
:root, .dark {
  --background: #050505;
  --foreground: #ffffff;
  --card: rgba(17,17,17,0.8);          /* glassmorphism base */
  --card-foreground: #ffffff;
  --primary: #00D4FF;                   /* cyan accent */
  --primary-foreground: #050505;
  --secondary: #7C3AED;                 /* purple accent */
  --secondary-foreground: #ffffff;
  --muted: #111111;
  --muted-foreground: #A1A1AA;
  --accent: #00D4FF;
  --accent-foreground: #050505;
  --border: rgba(255,255,255,0.08);
  --ring: #00D4FF;
  --radius: 1rem;
}
```

Preserve the `@theme inline` block untouched.

---

## Fonts (`fonts.css`)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
```

---

## App.tsx — Section Architecture

Single-file implementation. All sections in one scrollable page with a sticky nav.

### 1. `<Nav>` — Sticky glassmorphism header
- Logo: `srvraj311` in Inter Tight semibold + cyan dot
- Links: Work · About · Writing · Contact
- CTA: "Let's Talk" button with cyan border
- `backdrop-blur-xl bg-[#050505]/80 border-b border-white/5`

### 2. `<Hero>` — Full viewport
- **Left**: Label pill ("SDE II · Builder · AI Enthusiast"), huge editorial heading "Sourabh Raj", subheading, two CTA buttons
- **Right**: Profile image from Unsplash (professional portrait stand-in), overlaid floating stat cards using glassmorphism
- Floating cards: "4+ Years", "Enterprise SaaS", "Healthcare Tech", "AI Projects"
- Subtle radial gradient glow behind image (cyan → transparent)

### 3. `<CurrentlyBuilding>` — "Currently Building"
- Section label + 6 focus cards in a 3×2 grid
- Each card: icon + title + 1-line description
- Glassmorphism cards with subtle cyan top border on hover

### 4. `<About>` — Editorial split
- Large display quote: "I build software that solves meaningful problems."
- Left column: 3-paragraph narrative
- Right column: workspace/code image from Unsplash + decorative element
- Asymmetric grid (`grid-cols-5`, text on 3, image on 2)

### 5. `<Metrics>` — Animated counters
- 6 large stat blocks in a horizontal strip: Years Experience, Projects, Users Impacted, Technologies, Awards, OSS Contributions
- Intersection Observer triggers count-up animation on scroll
- Subtle dividers between stats

### 6. `<Projects>` — Featured Work (most important)
- 4 project cards, alternating large + small layout
- Each card: tag chips, title, 1-line summary, tech stack pills, and a large Unsplash mockup image
- Project data:
  - **Eduverse AI** — AI-powered ed platform (React, Node.js, AI, Cloud)
  - **HealthIO** — Healthcare management (Angular, Spring Boot, Microservices)
  - **EnWrite** — AI content platform (Next.js, OpenAI, Productivity)
  - **AI Experiments** — Side projects & tools
- Hover: subtle lift + glow border reveal

### 7. `<Expertise>` — Engineering Expertise
- 5 domain cards: Frontend Architecture, Backend Engineering, Cloud & DevOps, System Design, AI Engineering
- NO skill bars, NO ratings
- Each card: domain title + 4-6 technology tags as pills
- Glassmorphism cards, purple accent on category label

### 8. `<Writing>` — Technical Writing
- Minimal blog list: 5 articles
- Each entry: date, title (large), category pill, arrow link
- Clean editorial list, generous line spacing

### 9. `<Timeline>` — Career
- Vertical timeline with connector line (cyan gradient)
- 5-6 nodes: Developer → SE → Senior SE → SDE II → (current)
- Each node: role, company/context, year range, 1 achievement

### 10. `<LifeBeyondCode>` — Cinematic lifestyle section
- Dark editorial section with large Unsplash image (motorcycle/road)
- Pull quote: "The best engineers are shaped by experiences outside the screen."
- 4 lifestyle tags: Motorcycle · Travel · Photography · Learning

### 11. `<Contact>` — CTA footer
- Large heading: "Interested in building something meaningful together?"
- 4 link buttons: LinkedIn, GitHub, Email, Resume
- Minimal footer below: copyright + "Built with React"

---

## Imagery (Unsplash)

| Usage | Query / ID |
|-------|-----------|
| Hero portrait | Professional male portrait, dark background — `photo-1507003211169-0a1dd7228f2d` |
| Workspace | MacBook + code on desk — `photo-1461749280684-dccba630e2f6` |
| Healthcare UI | Medical dashboard — `photo-1576091160399-112ba8d25d1d` |
| AI dashboard | Tech/data visualization — `photo-1518770660439-4636190af475` |
| Motorcycle/road | Cinematic road trip — `photo-1558618666-fcd25c85cd64` |

---

## Animations & Interactions

- **Motion**: Use `motion/react` for:
  - Hero text fade-up on load (staggered children)
  - Floating cards animate in with delay
  - Section headings fade-up on scroll (via `whileInView`)
  - Project cards hover lift
- **Counter animation**: Pure React `useState` + `useEffect` + `IntersectionObserver`
- **Nav**: Active section highlight via scroll position tracking
- Keep all animations under 400ms, ease-out. No particle effects, no parallax.

---

## Responsive

- Mobile breakpoint at `md` (768px):
  - Hero: stacks vertically, image above text
  - Grid sections collapse to 1-column
  - Nav: hamburger menu with slide-down drawer
- Generous padding at all breakpoints

---

## Verification

1. Run dev server — confirm all 11 sections render without error
2. Scroll through on desktop — check spacing, typography hierarchy, glassmorphism cards
3. Resize to ~375px — confirm mobile layouts collapse correctly
4. Hover project cards — confirm lift + glow animation
5. Scroll to Metrics section — confirm counters animate in
6. Check all Unsplash images load with correct aspect ratios
