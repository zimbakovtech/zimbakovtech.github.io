# Zimbakov Portfolio

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

Modern, fast, and responsive developer portfolio. Built with the Next.js App Router, styled with Tailwind CSS, animated with Framer Motion, and shipped as a static site for GitHub Pages.

## Pages & sections

- Home — Hero with background image, role, and quick actions (projects, resume, contact).
- About — Short bio and skillset with tech icons.
- Projects — Responsive grid of highlighted work with links to case studies.
- Contact — Direct ways to reach out and social links.

### Project detail routes

- `/course-creator` — Case study page with visuals and highlights.
- `/court-vision` — Case study page with responsive previews.
- `/nextime` — Case study page showcasing mobile and web views.
- `/zebekov` — Case study page with gallery and summary.

## Highlights

- App Router with static export for fast loads and simple hosting.
- Tailwind design system with theme tokens and utility-first styling.
- Subtle scroll/reveal animations via Framer Motion.
- Accessible, mobile-first layout.

## Customize content

- Colors, fonts, and theme tokens: `tailwind.config.js`, `styles/globals.css`.
- Images and screenshots: `public/images/` (hero background set in `components/Hero.tsx`).
- Social links and metadata: `app/layout.tsx` and UI components.
