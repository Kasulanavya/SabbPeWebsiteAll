# SabbPe Premium Landing Page

A premium, storytelling fintech SaaS landing page built with Next.js 16, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Premium glass morphism design
- 🎬 Smooth Framer Motion animations
- 📱 Fully responsive
- 🎯 Storytelling layout (Razorpay/Stripe inspired)
- 🔗 Radix UI Navigation with mega menus
- 🎨 Deep blue gradient background with animated blobs
- 📊 Interactive sections with scroll animations
- 🌐 Product routing enabled

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Add your hero video:
Place your video file at `public/videos/sabbpe-hero.mp4`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with global background
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── products/           # Product pages
├── components/
│   ├── Navbar.tsx          # Sticky navbar with mega menu
│   ├── ScrollProgress.tsx  # Scroll progress indicator
│   ├── LayeredSection.tsx  # Reusable section wrapper
│   └── sections/           # Page sections
│       ├── HeroSection.tsx
│       ├── TrustStrip.tsx
│       ├── ProblemStatement.tsx
│       ├── UnifiedSolution.tsx
│       ├── HowItWorks.tsx
│       ├── ProductLayers.tsx
│       ├── WhySabbPe.tsx
│       ├── MissionSection.tsx
│       └── FinalCTA.tsx
```

## Design System

### Colors
- Primary Blue: `hsl(217, 91%, 60%)`
- Cyan: `hsl(192, 91%, 55%)`
- Teal: `hsl(168, 83%, 45%)`
- Background: `hsl(222, 47%, 6%)`

### Components
- Glass cards with backdrop blur
- Gradient text effects
- Animated floating elements
- Interactive hover states

## Sections

1. **Hero** - Full-screen with typewriter effect
2. **Trust Strip** - Scrolling partner logos
3. **Problem Statement** - Pain point cards
4. **Unified Solution** - Layered UI diagram
5. **How It Works** - Timeline with scroll progress
6. **Product Layers** - Tabbed product showcase
7. **Why SabbPe** - Feature cards
8. **Mission** - Dot-grid network animation
9. **Final CTA** - Gradient border glow

## License

MIT
