# Teen Next

Next.js application scaffolded from the same setup and folder structure as `biz-saas.hellosays.com`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript check |

## Developer guide (design system)

**Colors, typography, fonts, radius, and buttons** — how to use design tokens in code:

→ **[docs/DEVELOPER_GUIDE.md](./docs/DEVELOPER_GUIDE.md)**

## Project structure

```
app/              # Next.js App Router (routes, layouts)
components/       # UI + feature components
  ui/             # shadcn primitives (Button, Typography, …)
lib/              # API, hooks, stores, config
contents/         # Page copy and static content
docs/             # Developer documentation
```

## Stack

- Next.js 16 · React 19 · TypeScript
- Tailwind CSS 4 · shadcn/ui
- TanStack Query · Zustand (auth)
- Axios

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
