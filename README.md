# Jain Dinesh Kumar & Co — Website

A production-ready React website for a chartered accountancy firm, built with Vite, React Router
and Tailwind CSS.

## Pages

- **Home** (`/`) — hero, stats, services grid, why-choose-us, about snippet, testimonials, quick consultation form
- **About Us** (`/about`) — firm story, mission/vision, 25-year milestone timeline, core values, leadership preview, credentials
- **Services** (`/services`) — all 9 services with full "what's included" detail
- **Team** (`/team`) — 3 partner profiles + support team
- **Contact** (`/contact`) — contact cards, full consultation form, WhatsApp CTA, embedded map, FAQ accordion

## Tech stack

- React 19 + Vite
- React Router v6 (client-side routing)
- Tailwind CSS 3 (custom navy/gold theme, see `tailwind.config.js`)
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev        # local dev server, usually http://localhost:5173
npm run build       # production build → dist/
npm run preview     # preview the production build locally
```

## Editing content

Almost all text content (firm details, services, team bios, testimonials, FAQs, milestones) lives in
one file: **`src/data/siteData.js`**. Update it there and it updates everywhere the data is used.

## Wiring up the contact form

The consultation/contact form (`src/components/ConsultationForm.jsx`) currently validates input and
shows a success state, but does **not** send data anywhere — there's a `console.log` placeholder where
a real submission would go. To connect it to a backend or a form service (e.g. your own API,
Formspree, EmailJS, etc.), replace the block marked `NOTE: no backend is wired up yet` inside
`handleSubmit`.

## Images

Photography currently comes from Unsplash via hot-linked URLs (for demo purposes only). Before going
live, replace these with your own licensed photography — update the `src` values in `Home.jsx`,
`About.jsx`, `Team.jsx`, and the `PageHero` calls in `About.jsx` / `Services.jsx`.

## Map

The Contact page embeds a Google Maps iframe built from the office address in `siteData.js` (no API
key required for the basic embed). For a richer, interactive map, swap in the Google Maps JavaScript
API or Google Maps Embed API with your own API key.

## Deployment

This is a static site after `npm run build` — deploy the `dist/` folder to any static host:

- **Vercel / Netlify**: connect the repo, build command `npm run build`, output directory `dist`
- **Any static host** (S3, Cloudflare Pages, GitHub Pages, etc.): upload the contents of `dist/`

Since this uses client-side routing (React Router), configure your host to redirect all paths to
`index.html` (a SPA fallback) so deep links like `/services` work on refresh.


# Jain Dinesh Kumar & Co — Website

A production-ready React website for a chartered accountancy firm based in Jaipur, Rajasthan,
built with Vite, React Router, and Tailwind CSS.

## Tech stack

- **React 19** + **Vite 8** — build tooling and dev server
- **React Router v7** — client-side routing
- **Tailwind CSS 3** — custom navy/gold theme (see `tailwind.config.js`)
- **lucide-react** — icon set
- **oxlint** — linting

## Project structure

```
jda-website/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.jsx           # app entry point
    ├── App.jsx            # routes definition
    ├── index.css          # Tailwind base + global styles
    ├── data/
    │   └── siteData.js    # all firm content — text, contact info, services, team, FAQs, testimonials
    ├── components/
    │   ├── AnimatedNumber.jsx
    │   ├── ConsultationForm.jsx
    │   ├── CtaBand.jsx
    │   ├── Faq.jsx
    │   ├── Footer.jsx
    │   ├── Navbar.jsx
    │   ├── PageHero.jsx
    │   ├── ScrollToTop.jsx
    │   ├── SectionHeading.jsx
    │   ├── StatBar.jsx
    │   └── WhatsAppButton.jsx
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── Team.jsx
        ├── Contact.jsx
        └── NotFound.jsx
```

## Pages

- **Home** (`/`) — hero, stats bar, services grid, why-choose-us, about snippet, testimonials, quick consultation form
- **About Us** (`/about`) — firm story, mission/vision, 25-year milestone timeline, core values, leadership preview, credentials
- **Services** (`/services`) — all 9 services with full "what's included" detail
- **Team** (`/team`) — 3 partner profiles + support team
- **Contact** (`/contact`) — contact info cards, full consultation form, WhatsApp CTA, embedded Google Map, FAQ accordion
- **404** — catch-all not-found page

## Getting started

```bash
npm install
npm run dev        # local dev server, usually http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run lint        # run oxlint
```

## Editing content

Almost all text content — firm details, phone/email, address, services list, team bios,
testimonials, FAQs, milestones — lives in a single file:

**`src/data/siteData.js`**

Update it there and the change propagates to every page that uses it.

## Shared components

- **`PageHero`** — the navy banner at the top of every inner page (About, Services, Team, Contact). Takes `eyebrow`, `title`, `description`, `crumb`, and optional `image` props. Editing this file changes the hero banner (including the breadcrumb and eyebrow label) across **every** page that uses it.
- **`Navbar`** / **`Footer`** — site-wide header and footer.
- **`ConsultationForm`** — the "book a free consultation" form used on Home and Contact.
- **`WhatsAppButton`** — the floating WhatsApp chat button.
- **`CtaBand`** — the call-to-action banner shown at the bottom of most pages.

## Wiring up the contact form

The consultation/contact form (`src/components/ConsultationForm.jsx`) currently validates input
and shows a success state, but does **not** send data anywhere — there's a `console.log`
placeholder where a real submission would go. To connect it to a backend or a form service (e.g.
your own API, Formspree, EmailJS, etc.), replace the block marked `NOTE: no backend is wired up
yet` inside `handleSubmit`.

## Images

Photography currently comes from Unsplash via hot-linked URLs (for demo purposes only). Before
going live, replace these with your own licensed photography — update the `src` values in
`Home.jsx`, `About.jsx`, `Team.jsx`, and the `PageHero` calls in `About.jsx` / `Services.jsx`.

## Map

The Contact page embeds a Google Maps iframe built from the office address in `siteData.js` (no
API key required for the basic embed). For a richer, interactive map, swap in the Google Maps
JavaScript API or Google Maps Embed API with your own API key.

## Deployment

This is a static site after `npm run build` — deploy the `dist/` folder to any static host:

- **Vercel / Netlify**: connect the repo, build command `npm run build`, output directory `dist`
- **Any static host** (S3, Cloudflare Pages, GitHub Pages, etc.): upload the contents of `dist/`

Since this uses client-side routing (React Router), configure your host to redirect all paths to
`index.html` (a SPA fallback) so deep links like `/services` work on refresh.