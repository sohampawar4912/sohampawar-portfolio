# Soham Pawar — Portfolio

A premium, award-worthy developer portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

## Features

- **Premium Design** — Dark glassmorphism theme with gradients, glow effects, and animated backgrounds
- **Fully Responsive** — Optimized from 320px to 2560px+ viewports
- **Rich Animations** — Framer Motion, GSAP, Lenis smooth scroll, magnetic buttons, 3D card tilt
- **SEO Ready** — OpenGraph, Twitter Cards, JSON-LD, sitemap, robots.txt
- **Accessible** — WCAG-compliant with ARIA labels, keyboard navigation, focus indicators
- **Contact Form** — React Hook Form + EmailJS integration
- **Bonus Features** — Command palette (Ctrl+K), theme toggle, cookie consent, custom cursor, loading screen

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GSAP
- Lenis Smooth Scroll
- Lucide React Icons
- React Hook Form
- EmailJS
- shadcn/ui-style components

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## EmailJS Setup

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Create an email service and template
3. Add your Service ID, Template ID, and Public Key to `.env.local`
4. Template variables: `from_name`, `from_email`, `subject`, `message`

## Customization

| File | Purpose |
|------|---------|
| `constants/site.ts` | Name, URLs, social links, SEO metadata |
| `constants/skills.ts` | Skills grid data |
| `constants/experience.ts` | Work experience |
| `constants/projects.ts` | Project cards |
| `public/resume.pdf` | Your resume file for download |

## Deploy on Vercel

```bash
npm run build
```

Push to GitHub and import the repository in [Vercel](https://vercel.com). Add environment variables in the Vercel dashboard.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/           → Next.js App Router pages & layout
components/    → Reusable UI, sections, effects, layout
constants/     → Site content & configuration
hooks/         → Custom React hooks
lib/           → Utilities & EmailJS helper
types/         → TypeScript interfaces
public/        → Static assets, manifest, icons
```

## License

MIT
