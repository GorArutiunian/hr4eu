# HR4EU Marketing Website

Production-ready marketing site for HR4EU—connecting European companies with high-performing Armenian specialists.

## Tech stack

- **Next.js 14+** (App Router) with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **next/image** for images
- ESLint + Prettier

## Run the project

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script   | Description                |
|----------|----------------------------|
| `npm run dev`   | Start dev server          |
| `npm run build` | Production build          |
| `npm run start` | Start production server   |
| `npm run lint`  | Run ESLint                |
| `npm run format`| Run Prettier (write)      |

## Replacing the logo

The hero uses a **temporary inline SVG** component (`components/AnimatedLogo.tsx`) with a simplified icon and an animated arrow.

- **To use your real logo:**  
  Replace the inline SVG in `AnimatedLogo.tsx` with your exported SVG. Keep the arrow as a **separate `<path>`** so the stroke-dashoffset animation can still run. There is a `TODO` in the file as a reminder.

- **Fallback PNG:**  
  Add your logo as `/public/logo.png`. In `components/AnimatedLogo.tsx`, set `useFallback = true` to show the PNG instead of the inline SVG. A 1×1 placeholder exists so the image path never 404s.

## Editing service content

All service data lives in **`/lib/services.ts`**. Edit that file to change:

- Titles, slugs, descriptions
- Typical roles
- Engagement model (EU lead + specialists)
- “Why HR4EU” bullets

Slugs in `services.ts` define the URLs: `/services/it`, `/services/analytics`, `/services/accounting`, `/services/marketing`, `/services/operations`.

## Project structure

```
app/
  (site)/
    layout.tsx      # Navbar + main + Footer
    page.tsx        # Home
    about/page.tsx
    contact/page.tsx
    privacy/page.tsx
    terms/page.tsx
    services/
      page.tsx      # Services index
      [slug]/page.tsx  # Service detail (dynamic)
  layout.tsx        # Root layout (font, metadata)
  globals.css
  not-found.tsx
components/
  Navbar.tsx
  Footer.tsx
  Hero.tsx
  AnimatedLogo.tsx
  ServiceCards.tsx
  HowItWorks.tsx
  BenefitsSection.tsx
  Testimonials.tsx
  CTASection.tsx
lib/
  services.ts       # Single source of truth for services
public/
  logo.png          # Optional: fallback logo image
```

## Accessibility & performance

- Semantic HTML and ARIA where needed
- `prefers-reduced-motion`: arrow animation is skipped when reduced motion is preferred
- Responsive, mobile-first layout
- Metadata (title/description) set per page for SEO
