# jCode Studio — Claude Code Guidelines

## Stack

- **Framework:** Next.js 15 (App Router) — all pages are `page.jsx` files under `src/app/`
- **Styling:** Tailwind CSS with a custom config (`tailwind.config.js`) — use the custom color tokens (`darkpurple`, `whitepurple`, `rose`, `lavender`, etc.) rather than raw Tailwind defaults
- **Fonts:** Fredoka (display/headlines) via `font-fredoka`, Be Vietnam Pro (body/UI) via `font-vietnam`
- **Animation:** Framer Motion for page-level animations; `animate-marquee` / `animate-marquee-reverse` are custom Tailwind keyframes defined in `tailwind.config.js`
- **Icons:** `react-icons` (v5) — prefer `fa` and `si` families

## WCAG Accessibility — Required on Every Edit

Every change to a component or page **must** meet WCAG 2.1 AA. Check each of the following before finishing any edit:

### Images & non-text content
- All `<Image>` and `<img>` elements must have a meaningful `alt` attribute
- Decorative images (logos used inside a labelled link, background illustrations) use `alt=""` and `aria-hidden="true"`
- Emojis used as decoration must have `aria-hidden="true"` on their wrapper

### Interactive elements
- Every `<button>` must have a visible label or `aria-label`
- Toggle buttons (hamburger menu, accordions) must carry `aria-expanded` and `aria-controls` pointing to the controlled element's `id`
- Icon-only links must have `aria-label` describing the destination; add "(opens in new tab)" when `target="_blank"`
- All external links with `target="_blank"` must include `rel="noopener noreferrer"`

### Focus management
- Never suppress the global `:focus-visible` ring defined in `globals.css`
- Do not add `outline-none` without also adding a custom `focus-visible:` replacement ring
- The skip-to-main-content link in `Header.jsx` must remain the first focusable element on every page

### Screen reader structure
- Pages must have exactly one `<h1>`; heading levels must not skip (h1 → h2 → h3, not h1 → h3)
- Landmark regions: use semantic elements (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`)
- When two or more `<nav>` elements exist on a page, each must have a unique `aria-label`
- Decorative / duplicated content (marquee clones, watermark text, background quote glyphs) must have `aria-hidden="true"`
- Star ratings and other symbolic content must have an `aria-label` on the container and `aria-hidden="true"` on the symbol characters

### Color contrast
- Normal text (< 18px regular or < 14px bold): minimum 4.5 : 1 contrast ratio
- Large text (≥ 18px regular or ≥ 14px bold): minimum 3 : 1
- Avoid opacity utilities like `/60` or `/70` on text — they frequently drop below the threshold. Prefer full-opacity brand tokens or a dedicated mid-tone

### Motion
- Respect `prefers-reduced-motion`; Framer Motion handles this automatically but any custom CSS animations should be wrapped in `@media (prefers-reduced-motion: no-preference)`

## Project Conventions

- JSX unescaped characters: apostrophes → `&apos;`, quotes → `&ldquo;` / `&rdquo;`
- PropTypes are required on every component that accepts props — import from `prop-types`
- Prefer `<Link>` from `next/link` over raw `<a>` for internal navigation
- No comments unless the reason is non-obvious; no trailing summary comments
