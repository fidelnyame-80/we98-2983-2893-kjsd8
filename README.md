# Iable Rehab UI

This project is a React + Vite one-page rehab website with a modern white, gold, and black theme. The current build includes these sections:

- Home
- About
- Services
- FAQ

The UI was rebuilt from the default Vite starter into a custom responsive landing page with a premium desktop layout and a polished mobile experience.

## Run The Project

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run build
npm run lint
```

## Where The Work Was Done

### `src/App.jsx`

This file contains the full page structure and all section content.

What was added here:

- Top-level content arrays for reusable page data:
  - `navigation`
  - `metrics`
  - `pillars`
  - `recoveryJourney`
  - `services`
  - `faqs`
- Mobile navigation state:
  - `menuOpen`
- Full one-page layout inside the `App()` component

What each part of `src/App.jsx` is responsible for:

- Header:
  - Brand block
  - Desktop navigation
  - Mobile menu toggle
  - Header CTA button
- `#home`:
  - Hero headline
  - Supporting copy
  - CTA buttons
  - Metric cards
  - Decorative right-side hero cards
- `#about`:
  - About intro copy
  - Recovery philosophy/story block
  - Pillar cards
  - Recovery journey panel
- `#services`:
  - Service section heading
  - Four service cards generated from the `services` array
- `#faq`:
  - FAQ intro and callout
  - Expandable FAQ items generated from the `faqs` array
- Footer:
  - Brand summary
  - Repeat navigation links
- Mobile dock:
  - Bottom-fixed quick links for small screens

If a developer wants to change text content first, `src/App.jsx` is the main place to look.

## Styling Map

### `src/App.css`

This file contains the page-specific layout and component styling.

Main style areas inside `src/App.css`:

- Shell and background effects:
  - `.app-shell`
  - `.ambient`
- Header and nav:
  - `.site-header`
  - `.brand`
  - `.site-nav`
  - `.nav-link`
  - `.nav-cta`
  - `.nav-toggle`
- Hero section:
  - `.hero-section`
  - `.hero-copy`
  - `.hero-actions`
  - `.hero-metrics`
  - `.hero-stage`
  - `.hero-card--primary`
  - `.hero-card--secondary`
  - `.hero-seal`
- Shared content section styling:
  - `.content-section`
  - `.section-heading`
  - `.section-kicker`
  - `.mini-label`
- About section:
  - `.about-layout`
  - `.about-story`
  - `.pillar-grid`
  - `.pillar-card`
  - `.journey-panel`
  - `.journey-step`
- Services section:
  - `.services-section`
  - `.services-grid`
  - `.service-card`
  - `.service-number`
  - `.service-list`
- FAQ section:
  - `.faq-section`
  - `.faq-intro`
  - `.faq-callout`
  - `.faq-list`
  - `.faq-item`
  - `.faq-icon`
- Footer and mobile quick actions:
  - `.site-footer`
  - `.footer-links`
  - `.mobile-dock`

Responsive behavior is also handled in `src/App.css` through the media query blocks near the bottom of the file:

- `@media (max-width: 1080px)`
- `@media (max-width: 920px)`
- `@media (max-width: 640px)`

If a developer wants to adjust layout, spacing, card appearance, or mobile behavior, this is the file to edit.

## Global Theme Setup

### `src/index.css`

This file sets the global design foundation.

What lives here:

- Theme variables:
  - `--bg`
  - `--surface`
  - `--ink`
  - `--muted`
  - `--gold`
  - `--gold-strong`
- Global font stacks:
  - `--font-display`
  - `--font-body`
- Global page background gradients
- Base resets for:
  - `html`
  - `body`
  - headings
  - links
  - media
  - buttons
  - `#root`

If a developer wants to change the overall color palette, typography, or global page feel, start in `src/index.css`.

## Quick Edit Guide

Common changes and where to make them:

- Change menu items:
  - Edit `navigation` in `src/App.jsx`
- Change hero text or CTA labels:
  - Edit the `#home` section in `src/App.jsx`
- Change About cards:
  - Edit `pillars` in `src/App.jsx`
- Change recovery process steps:
  - Edit `recoveryJourney` in `src/App.jsx`
- Change service cards:
  - Edit `services` in `src/App.jsx`
- Change FAQ questions and answers:
  - Edit `faqs` in `src/App.jsx`
- Change colors, spacing, card shapes, and mobile layout:
  - Edit `src/App.css` and `src/index.css`

## Validation

The current UI was verified with:

- `npm run build`
- `npm run lint`

## Summary Of The Custom Build

The original Vite starter content was removed and replaced with:

- A custom luxury rehab landing page
- Responsive sticky header navigation
- Sleek mobile menu and bottom mobile action dock
- Home, About, Services, and FAQ sections
- White, gold, and black visual theme
- Reusable content-driven section data in `src/App.jsx`
