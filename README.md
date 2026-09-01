# Sourabh — Portfolio

Personal portfolio site for Sourabh (srvraj311). Single-page, dark-first editorial
design with a light (pastel peach) day mode.

**Stack:** Vite + React 19 + TypeScript + Tailwind v4 + shadcn/ui + motion + lucide-react.

## Running the code

Use Node 22 (see `.nvmrc`):

```bash
nvm use
npm i
npm run dev
```

`npm run build` produces a static site in `dist/`.

## Content

All page content lives in `src/app/App.tsx` as typed data arrays near the top
(`PROJECTS`, `EXPERTISE`, `TIMELINE`, `RECOGNITION`, `REPOS`, `METRICS`,
`HIGHLIGHT_DATA`) plus the `LINKS` constant for contact URLs. Edit those to update
the site.

Project card artwork is generated — each project has a `cover` key mapping to an
abstract SVG motif in `COVER_MOTIFS` (`ProjectCover` component).

The "Beyond the Screen" section pulls Instagram story highlights from
`@sourabh.archive`. Frames live in `public/life/ig/` as `<slug>_NN.jpg` (+ a
`<slug>__cover.jpg`); `HIGHLIGHT_DATA` maps each slug + title + frame count. To
refresh: re-download frames into that folder and update the array.

## Theming

`src/styles/theme.css` defines the palette: `:root` = light (day), `.dark` = night.
A blocking script in `index.html` applies the saved theme (localStorage key `theme`,
default `dark`) before paint. The toggle lives in `Nav` via the `useTheme` hook.
Components consume semantic CSS vars (`--background`, `--foreground`, `--surface`,
`--surface-solid`, `--glass`, `--hairline`, `--primary`, …) — avoid hard-coded hex
in `App.tsx` except inside the always-dark `COVER_MOTIFS` art.
