# lost satellites

landing page for a design studio based in Rome.

**[→ view live](https://lostsatellite-v1.netlify.app)**

## context

Lost Satellites is a design studio founded in Rome, 2024. they needed a web presence that matched their aesthetic — bold, animated, slightly cinematic. freelance project covering visual direction and frontend build.

all visual assets crafted by the studio. the code focuses on translating that identity into scroll-driven animations and transitions with GSAP.

## what it does

- **scroll-driven frame animation** — 47-frame PNG sequence rendered to canvas via GSAP ScrollTrigger, with frame preloading and aspect-ratio-correct drawing
- **cinematic scroll pacing** — pinned hero section, scrub-driven timelines, intentional visual rhythm across four sections
- **animated typography** — bracket-reveal title animations triggered on scroll (OrbitaAnimatedTitle, GalassieAnimatedTitle) with staggered text entry
- **responsive architecture** — `useIsMobile` hook drives component-level branching for layout, navigation, and footer variants
- **GSAP scroll navigation** — smooth scroll-to-section with `ScrollToPlugin`, accessible `<a href>` fallbacks for keyboard/crawler support

## stack

`react 18` · `gsap` · `vite` · `css`

## structure

```
src/
├── components/
│   ├── HomeAnimation.jsx       # scroll-driven canvas frame animation
│   ├── HeaderMinAnimated.jsx   # desktop sticky nav with GSAP scrollTo
│   ├── MobileMenu.jsx          # mobile hamburger + overlay nav
│   ├── OrbitaAnimatedTitle.jsx  # bracket-reveal hero title
│   ├── GalassieAnimatedTitle.jsx # bracket-reveal services title
│   ├── AnimatedTitle.jsx        # base animated title component
│   ├── Footer.jsx               # desktop footer
│   └── FooterMobile.jsx         # mobile footer with social links
├── pages/
│   └── Landing.jsx              # single-page layout composition
├── hooks/
│   └── useIsMobile.js           # responsive breakpoint hook
├── assets/
│   └── SVGassets.jsx            # all brand SVGs as React components
└── App.jsx                      # entry point
```

## run locally

```bash
npm install
npm run dev
```

## potential v2

the v1 shipped and is live. if the project continues, these are directions worth exploring:

- [ ] scope GSAP animations to refs instead of global class selectors — prevents conflicts if components are reused
- [ ] replace 47-frame PNG sequence with a compressed video or sprite sheet — reduce payload from 2.4MB to ~500KB
- [ ] add project gallery section with case study entries
- [ ] add contact form or booking flow
- [ ] upgrade to Vite 6 + React 19

## status

🟢 shipped — v1 live on Netlify, delivered to client.

---

<sub>code by [fabio cassisa](https://github.com/fabio-cassisa) · assets by lost satellites studio</sub>
