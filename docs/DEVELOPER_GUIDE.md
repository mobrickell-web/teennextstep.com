# Teen Next — Developer Design Guide

This guide explains how to use the design system in code: colors, typography, radius, buttons, and UI components.

**Source of truth in code**

| What | File |
|------|------|
| Color tokens & radius | `app/globals.css` (`:root`) |
| Fonts (Next.js) | `lib/config/fonts.ts` |
| Typography component | `components/ui/typography.tsx` |
| Button component | `components/ui/button.tsx` |
| shadcn primitives | `components/ui/*` |

---

## Quick rules

1. **Do not hardcode hex** in components. Use Tailwind tokens or CSS variables.
2. **Prefer `<Typography>`** for text that matches design headings/body/button styles.
3. **Use semantic tokens** (`bg-primary`, `text-foreground`, `border`) for shadcn components.
4. **Primary CTA buttons**: `rounded-lg` (12px), `bg-primary`, height **50px**.
5. **Default body font** is **Inter** (`font-sans`).

---

## Project layout

This project mirrors the route groups from the HelloSays biz scaffold:

| Route group | Purpose |
|-------------|---------|
| `(auth-flow)` | Authentication and onboarding flows |
| `(main)` | Public marketing pages |
| `(pricing-selection)` | Pricing and payment flows |
| `(dashboard)` | Authenticated dashboard shell |

Pages are placeholders until you implement feature-specific UI.
