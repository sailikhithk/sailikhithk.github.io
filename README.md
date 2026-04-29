# sailikhithk-portfolio-v2

Personal portfolio of **Sai Likhith Kanuparthi** — Sr. Software Engineer, ML Infrastructure & AI Engineering at Airbnb.

> Live: `https://sailikhithk.github.io` · Deployed on Vercel

---

## Tech Stack

### Runtime
| Package | Version | Role |
|---|---|---|
| Next.js | 16.2.4 | Framework — App Router, Turbopack dev, SSR/SSG |
| React | 19.2.4 | UI rendering |
| TypeScript | ^5 | Type safety across all components and data files |

### 3D / Visualization
| Package | Version | Role |
|---|---|---|
| `@splinetool/react-spline` | ^4.1.0 | Embeds the interactive 3D keyboard scene |
| `@splinetool/runtime` | ^1.12.88 | Spline event system (`mouseHover`, `keyDown`, `keyUp`), scene graph API, `setVariable()` |
| `react-globe.gl` | ^2.37.1 | WebGL Earth globe with satellite particle overlay |
| `three` | ^0.184.0 | Three.js — underlying renderer for react-globe.gl (types only in this project) |
| `satellite.js` | ^7.0.0 | SGP4/SDP4 orbital mechanics — propagates TLE data to lat/lng/alt |

### Animation
| Package | Version | Role |
|---|---|---|
| `framer-motion` | ^12.38.0 | Scroll-triggered reveals, page-load entrance, `AnimatePresence` transitions |
| `gsap` | ^3.15.0 | Keycap waterfall reveal — direct mutation of Spline scene object transforms |

### UI
| Package | Version | Role |
|---|---|---|
| `react-tilt` | ^1.0.2 | Mouse-parallax tilt on project cards |
| Tailwind CSS | ^4 | Utility classes (minimal — most styles are CSS-in-JS inline for theming control) |
| Font Awesome 4.7 | CDN | Icon set (social links, about section icons) |
| Google Fonts | `next/font` | Montserrat (headings/nav), Lato (body) |

### Validation
| Package | Version | Role |
|---|---|---|
| `zod` | ^4.3.6 | Schema validation on contact form API route |

### Dev Tools
| Tool | Role |
|---|---|
| ESLint 9 + `eslint-config-next` | Linting |
| Prettier 3 | Formatting — `app/**/*.{ts,tsx,css,json}` |
| `@tailwindcss/postcss` | Tailwind v4 PostCSS integration |

---

## Architecture

Single-page app via Next.js App Router. All sections render from one `page.tsx`. Client/server split is minimized — only sections that require browser APIs are `"use client"`.

```
page.tsx (RSC)
├── Navbar            [client] — scroll listener, mobile menu state
├── Hero              [client] — Framer Motion entrance animations
├── AboutAndTechStack [client] — Spline runtime, GSAP, keycap sounds, AudioElement
├── Recognition       [client] — carousel index state, AnimatePresence
├── Experience        [client] — useInView scroll-triggered stagger
├── Education         [RSC]    — static degree data, Next/Image
├── Projects          [client] — useInView-gated render, react-tilt
├── Contact           [client] — dynamic Globe import (ssr: false)
└── Footer            [RSC]    — static copyright
```

**Key decisions:**
- `Globe` uses `dynamic(() => import(...), { ssr: false })` — prevents Three.js crashing during SSR
- `Spline` uses `React.lazy()` + `<Suspense>` — defers the 3D bundle until the section is visible
- All content lives in `app/data/` — no CMS, no external API calls for content
- `app/data/index.ts` is a barrel file — all components import from `"@/app/data"` only

---

## Project Structure

```
sailikhithk-portfolio-v2/
├── app/
│   ├── layout.tsx                  # Root layout: Google fonts, metadata, FA CDN link
│   ├── page.tsx                    # Page assembly — all sections in order
│   ├── globals.css                 # Design tokens, layout classes, glass card, star divider
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky nav: scroll-shrink, mobile hamburger
│   │   ├── Hero.tsx                # Profile photo, name, title, social links
│   │   ├── AboutAndTechStack.tsx   # 3-col: about cards | Spline keyboard | career stats
│   │   ├── Recognition.tsx         # Animated testimonial carousel (4 Airbnb peers)
│   │   ├── Experience.tsx          # Work history cards with logos
│   │   ├── Education.tsx           # NYU + JNTUA degree entries
│   │   ├── Projects.tsx            # Tilt cards with image hover overlay (9 projects)
│   │   ├── Contact.tsx             # Hire Me section + satellite globe
│   │   ├── Footer.tsx              # Copyright footer
│   │   └── ui/
│   │       ├── Globe.tsx           # Live satellite orbit visualization
│   │       └── SectionHeading.tsx  # Reusable h2 + optional subtitle + star-divider HR
│   ├── data/
│   │   ├── index.ts                # Barrel re-export — import everything from here
│   │   ├── about.ts                # cards[], stats[], SKILLS{} (24 skills keyed by Spline name)
│   │   ├── experience.ts           # jobs[] — 5 companies
│   │   ├── projects.ts             # projects[] — 9 projects with tags + links
│   │   └── recognition.ts          # recognitions[] — 4 Airbnb peer quotes
│   ├── types/
│   │   └── index.ts                # Interfaces: Job, Project, Recognition, Skill, AboutCard, CareerStat
│   └── api/
│       └── send/route.ts           # Contact form email handler (Zod-validated)
├── public/
│   ├── img/                        # Profile photo, university logos, project screenshots
│   └── assets/
│       ├── skills-keyboard.spline  # Spline 3D scene (editor format — see Known Issues)
│       └── keycap-sounds/
│           ├── press.mp3           # Played on keycap hover/click
│           └── release.mp3         # Played on hover leave
├── next.config.ts                  # outputFileTracingRoot, remotePatterns (Wikimedia logos)
├── tailwind.config.js
└── package.json
```

---

## Design System

All tokens defined in `globals.css` as CSS custom properties. Components reference tokens via `var()` — nothing is hardcoded.

### Color Tokens

```css
:root {
  --bg:          #091227                    /* deep navy — all section backgrounds */
  --teal:        #18BC9C                    /* accent — links, dividers, stats, borders */
  --text:        #ffffff                    /* primary text */
  --muted:       #aaaaaa                    /* secondary text, descriptions */
  --card-bg:     rgba(255,255,255,0.05)     /* frosted glass card fill */
  --card-border: rgba(255,255,255,0.08)     /* glass card border */
  --section-py:  6rem 0                     /* section vertical padding */
  --inner-px:    0 5rem                     /* section horizontal inset */
}
```

### Typography

| Role | Font | Weights | Applied via |
|---|---|---|---|
| Headings, nav, labels | Montserrat | 400, 700 | `var(--font-montserrat)`, uppercase |
| Body, descriptions | Lato | 300, 400, 700 | `var(--font-lato)`, default |
| Base size | — | — | `html { font-size: 20px }` — all `rem` scale from here |
| Responsive headings | — | — | `clamp(1.5rem, 4vw, 3rem)` |

### Layout Classes

```css
.section-wrapper   /* Full-width block, bg: var(--bg), padding: 6rem 0 */
.section-inner     /* padding: 0 calc(5rem + 84px)  ← extra 84px = Recognition arrow gutter */
.section-body      /* Legacy alias for section-inner */
.card-glass        /* Glass morphism: bg 5% white, 1px border, border-radius 8px, box-shadow */
.tag-pill          /* Small pill: teal border, teal text, font-size 0.65rem */
.star-divider      /* Decorative <hr> with ::after { content: "★" } centered on line */
```

**Section IDs** (used for anchor nav + per-section CSS overrides):
`#page-top` · `#about` · `#recognition` · `#experience` · `#education` · `#portfolio` · `#contact`

---

## Component Algorithms

### `Globe.tsx` — Live Satellite Orbital Propagation (SGP4)

Renders real Low Earth Orbit satellites as animated green particles on a rotating Earth globe in the Contact section.

**Pipeline:**

```
TLE text file (space-track-leo.txt, ~1,600 satellites)
  → parse 3-line blocks → satellite.twoline2satrec() → satrec objects
  → filter: discard satellites where propagate() returns no position (decayed/invalid)
  → store as satData[]

rAF loop: setTime(t => t + 3000ms) per frame  (accelerated time)
  → useMemo recalculates all positions on each time change:
      satellite.gstime(time)                    → GMST (Earth rotation angle)
      satellite.propagate(satrec, time)         → ECI XYZ vector
      satellite.eciToGeodetic(eci, gmst)        → { latitude, longitude, height_km }
      radiansToDegrees(lat/lng)
      alt = height_km / 6371  (normalized to Earth radii)
  → filter NaN (satellites below horizon or out of propagation range)
  → feed { lat, lng, alt }[] to react-globe.gl as particlesData
```

**Config:**
- Initial POV: North America center `{ lat: 39.8, lng: -98.5, altitude: 2.2 }`
- `autoRotate: true`, speed: `0.5`
- Globe texture: Blue Marble (`earth-blue-marble.jpg` via unpkg)
- Particle color: `palegreen`
- Globe size: 800×800px, scaled `1.5×` via CSS transform, clipped to circle via `border-radius: 50%` + `WebkitMaskImage`

---

### `AboutAndTechStack.tsx` — Keycap Waterfall Reveal

When the Spline scene loads, all keyboard keys cascade down with a bounce animation.

**`revealKeycaps(app)` algorithm:**

```
1. app.findObjectByName("keyboard") → keyboard object
2. keyboard.visible = false  → hide to force clean re-render
3. await sleep(400)
4. keyboard.visible = true
5. Compute responsive scale:
     s = 0.32 * clamp(windowWidth / 1280, 0.5, 1.15)
     (32% of reference at 1280px, min 50%, max 115%)
6. gsap.set(kbd.scale, { x: s, y: s, z: s })     ← no animation, instant
7. gsap.set(kbd.position, { x: 0, y: -40, z: 0 })
8. gsap.set(kbd.rotation, { x: 0, y: π/12, z: 0 })  ← slight angle
9. await sleep(900)  ← let Spline settle

10. keycap-desktop objects → forEach: await sleep(i * 70); k.visible = true
    (stagger-appear, no animation — desktop key labels)

11. keycap objects → forEach:
      k.visible = false
      await sleep(i * 70)          ← 70ms stagger per key
      k.visible = true
      gsap.fromTo(k.position,
        { y: 200 },                ← start above
        { y: 50, duration: 0.5, ease: "bounce.out" }  ← drop with bounce
      )
```

**Spline event bridge (bilateral communication):**

| Event | Direction | Action |
|---|---|---|
| `mouseHover` on keycap | Spline → React | Lookup `SKILLS[e.target.name]` → `setSelectedSkill()` → render info card |
| `mouseHover` on body/platform | Spline → React | Clear `selectedSkill`, hide info card |
| `keyDown` on keycap | Spline → React | Set `selectedSkill` + call `splineApp.setVariable("heading", skill.label)` + `setVariable("desc", ...)` |
| `keyUp` | Spline → React | Play release sound + clear Spline variables |
| `selectedSkill` state change | React → Spline | `splineApp.setVariable("heading", ...)` — updates text inside the 3D scene |

**`SKILLS` map:** `Record<string, Skill>` keyed by Spline object name. The key (e.g. `"docker"`, `"aws"`) must exactly match the object name in the Spline scene. 24 skills defined.

**Keycap sound system (`useKeycapSounds`):**
- Creates two `HTMLAudioElement` instances on mount (`press.mp3` vol 0.4, `release.mp3` vol 0.3)
- Browser autoplay policy: audio unlocked on first `click | keydown | touchstart` via `{ once: true }` listener
- `playPress()` / `playRelease()` reset `currentTime = 0` before playing — allows rapid repeated plays

---

### `Recognition.tsx` — Testimonial Carousel

```
state: index (0..3)
prev() → setIndex(max(i-1, 0))          — disabled at 0
next() → setIndex(min(i+1, n-1))        — disabled at last

AnimatePresence mode="wait":
  outgoing: { opacity: 0, x: -40 }
  incoming: { opacity: 0, x: 40 } → { opacity: 1, x: 0 }
  transition: 0.3s

Dot nav: onClick → setIndex(i) directly
```

4 recognitions from Airbnb peers: Ameet Shinde (Sr. Manager BPI), Jeremy Chua (Staff Data Scientist), Lori Barber (Operations Lead), Alejandro Virrueta (Product Manager).

---

### `Navbar.tsx` — Scroll-Shrink

```
window.scroll listener → scrolled = (scrollY > 80)

scrolled = false:  padding: 25px 0,  brand font-size: 1.8rem
scrolled = true:   padding: 10px 0,  brand font-size: 1.4rem
transition: 0.3s on both properties
```

Nav links: About & Skills · Recognition · Experience · Education · Projects · Contact · Medium (external).

**Known gap:** Mobile hamburger button is rendered but `display: none` — no CSS breakpoint shows it. Tapping hamburger (`☰`) does toggle `open` state and renders the mobile menu, but the button itself is invisible.

---

### `Projects.tsx` — Intersection-Gated Render

```
useInView(ref, { once: true, margin: "-80px" })
  → if !inView: render nothing (no DOM, no rAF, no tilt instances)
  → if inView:  render all 9 project cards

Each card:
  motion.div: { opacity: 0, y: 40 } → { opacity: 1, y: 0 }
  delay: index * 0.15s, ease: "easeOut"
  Tilt: { max: 15°, scale: 1.02, speed: 450 }
  Image hover overlay: onMouseEnter/Leave toggle background rgba(0,0,0,0.45)
```

---

## Data Models

```typescript
interface Job {
  company: string;
  logo: string | null;            // null → fallback fa-database icon
  role: string;
  period: string;
  desc: string;
  stack: string;                  // comma-separated tech string
}

interface Project {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;                  // path under /public/img/
  github?: string;
  deploy?: string;
}

interface Recognition {
  name: string;
  title: string;
  quote: string;
}

interface Skill {
  name: string;                   // must match Spline object name exactly
  label: string;
  color: string;                  // hex — used for card border + label text
  icon: string;                   // devicons CDN URL
  shortDescription: string;
}

interface AboutCard  { icon: string; title: string; desc: string; }
interface CareerStat { value: string; label: string; }
```

---

## Content Data

### Experience (5 companies)
| Company | Role | Period |
|---|---|---|
| Airbnb | Sr. SWE — ML Infrastructure | Jun 2025 – Present |
| Eli Lilly | Sr. SWE (via ThriveOn) | Sept 2024 – Jun 2025 |
| Southwest Airlines | Sr. SWE (via ThriveOn) | Jan 2023 – Aug 2024 |
| Shell PLC | Sr. Python Developer (via ThriveOn) | Jan 2021 – Nov 2022 |
| Oracle India | Data Engineer | Sept 2017 – Jul 2019 |

### Projects (9)
Claude Code Ecosystem · AI Interview Copilots · Redpen (Airbnb) · BPI Virtual Analyst (Airbnb) · Dose Management System (Eli Lilly) · RomeoAI · ML Subsurface Pipeline (Shell) · COVID-19 Dashboard · ERP Analytics (Oracle)

### Career Stats
`8+` Years Experience · `10K` Rows/Run at Airbnb · `30+` LLM Models Integrated · `17M` Pageviews/Month (Shell)

### Skills on Keyboard (24 keys)
JavaScript · TypeScript · React · Next.js · Tailwind · Node.js · Express · PostgreSQL · MongoDB · Git · GitHub · Kubernetes/OCP · NPM · Firebase · WordPress · Linux · Docker · Nginx · AWS · Google Cloud · Python · Vercel · Java/Spring Boot · HTML5 · CSS3

---

## Sections Summary

| Section | Component | ID | Animation strategy |
|---|---|---|---|
| Navigation | `Navbar` | — | Scroll-shrink via state |
| Hero | `Hero` | `#page-top` | Framer Motion entrance: 3 staggered divs (0s, 0.2s, 0.4s) |
| About & Skills | `AboutAndTechStack` | `#about` | GSAP waterfall + Framer useInView side-stagger |
| Recognition | `Recognition` | `#recognition` | AnimatePresence slide carousel |
| Work Experience | `Experience` | `#experience` | Framer useInView vertical stagger (0.1s/item) |
| Education | `Education` | `#education` | None — RSC, static |
| Projects | `Projects` | `#portfolio` | useInView-gated render + Framer stagger + react-tilt |
| Contact | `Contact` | `#contact` | Framer whileInView left/right slide + satellite globe |
| Footer | `Footer` | — | None — RSC |

---

## Known Issues & Warnings

| Warning | Root cause | Fix |
|---|---|---|
| `Spline Runtime only accepts .splinecode files` | `assets/skills-keyboard.spline` is a Spline **editor** file, not an exported runtime file | Export from Spline app → "Code Export" → download `.splinecode` → update `scene` prop |
| `Multiple instances of Three.js` | `react-globe.gl` bundles its own Three.js internally, creating a second instance alongside the `three` package | Add alias in `next.config.ts`: `config.resolve.alias['three'] = require.resolve('three')` |
| `Image width/height modified` — `/img/nyu.png` | `Education.tsx` sets `height` style but no `width: "auto"` counterpart | Add `width: "auto"` to the `style` prop on that `<Image>` |
| Mobile hamburger invisible | `<button>` has `display: none` hardcoded, no responsive breakpoint override | Add `@media (max-width: 768px) { .navbar-toggle { display: block } .navbar-links { display: none } }` |

---

## Running Locally

```bash
cd sailikhithk-portfolio-v2
npm install
npm run dev          # http://localhost:3000 (Turbopack)
npm run build        # Production build
npm run lint         # ESLint
npm run format       # Prettier write
npm run format:check # Prettier check (CI)
```

**Environment variables** (contact form only):
```bash
# .env.local
RESEND_API_KEY=re_...
```

---

## Content Update Cheatsheet

| What to update | File |
|---|---|
| Work history | `app/data/experience.ts` → `jobs[]` |
| Projects | `app/data/projects.ts` → `projects[]` |
| Testimonials | `app/data/recognition.ts` → `recognitions[]` |
| About cards / career stats | `app/data/about.ts` → `cards[]`, `stats[]` |
| Skills keyboard | `app/data/about.ts` → `SKILLS{}` (key must match Spline object name) |
| Education | `app/components/Education.tsx` → `degrees[]` |
| Nav links | `app/components/Navbar.tsx` → `navLinks[]` |
| Social links (Hero) | `app/components/Hero.tsx` → `socialLinks[]` |
| Social links (Contact) | `app/components/Contact.tsx` → `socialLinks[]` |
| SEO metadata | `app/layout.tsx` → `metadata` export |
