<div align="center">

![Marketing Quest — SaaS marketing playbook banner](./marketing.png)

**Live site →** [https://marketing-hazel-seven.vercel.app/](https://marketing-hazel-seven.vercel.app/)

</div>

---

## ◭ What this project is ◮

**Marketing Quest** is a **story-driven, educational marketing site** for people who ship **digital products** — SaaS, web apps, and software tools. It does **not** sell a product directly. Instead it positions you as a guide: **free tutorials and quest-style chapters**, **Skill Unlocked** callouts (psychology + tests you can run), and **newsletter / playbook** CTAs for deeper material.

The copy follows a **PAS + BAB hybrid** in **adventure mode**: the visitor is the struggling indie hero, old tactics are the villains, and your content is the map. Sections cover launch narrative, storytelling copy, demos, email, offers, retention, social proof, FAQs, and a final “start your saga” signup — all with **neumorphic** pastel UI, **dark mode**, and a playful “level up” tone.

**Live deployment:** [marketing-hazel-seven.vercel.app](https://marketing-hazel-seven.vercel.app/) (Vercel).

---

## ⌖ Stack

| Layer | Choice |
| ------ | ------ |
| Framework | **Next.js 15** (App Router) |
| Styling | **Tailwind CSS v4** — soft shadows, slate/zinc pastels, `dark:` variants |
| UI | **shadcn-style** primitives — `Button`, Radix **Accordion** |
| Icons | **Lucide React** (per-icon imports) |
| Theme | **next-themes** (system / light / dark) |
| Images | `next/image` — local SVGs + README PNG under `public/` and root |

---

## ⚝ Project layout (high level)

- `src/app/` — `layout.tsx` (SEO + OG), `page.tsx`, `globals.css`, `opengraph-image.tsx`
- `src/components/sections/` — Navbar, Hero, Villains, Quests, Social proof, Paths, FAQ, Final CTA, Footer, Skill Unlocked, signup form
- `src/components/ui/` — shared UI pieces
- `public/` — quest SVGs, hero art, brand-strip placeholders

---

## 🜲 Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

Set **`NEXT_PUBLIC_SITE_URL`** to your real domain in production so Open Graph `metadataBase` and share previews resolve correctly.

---

## ⧉ License / intent

Educational showcase and lead-magnet positioning — not financial or legal advice. **Ship the narrative first** — specs can follow once the plot lands. ⎔
