# cyril-portfolio

Personal portfolio of **Cyril Nyarko Tawiah**, Designer · 3D Visualizer · Developer.

**Live:** https://cyrilnyarkotawiah.github.io/cyril-portfolio/

- Single-page home (hero, about, projects, skills, blog, contact) + case-study and blog-article pages.
- Built with React, Vite, Tailwind CSS v4, Framer Motion, Lucide icons.
- Contact form opens the visitor's email app (mailto), no backend.
- Deploys automatically to GitHub Pages on every push to `main`.

## Edit content

All content lives in `src/data/`:

| File | What it holds |
|---|---|
| `site.ts` | Name, title, motto, email, phones, socials |
| `projects.ts` | Projects + case studies (add an object, drop images in `src/assets/projects/`) |
| `posts.ts` | Blog articles (add an object with title/date/body blocks) |
| `experience.ts` | Roles + education |
| `skills.ts` | Skill groups |

The hero photo is `src/assets/portrait.jpg`, replace that file to change it.
The CV is intentionally not published on the site.

## Dev

```bash
npm install
npm run dev        # local dev server
npm run build      # production build (base /cyril-portfolio/)
npm run preview    # serve the production build
npm run typecheck
```

Blog articles are drafts written from cited source material, review before promoting.
