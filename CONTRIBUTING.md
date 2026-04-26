# Contributing to @florexlabs/ui

Thanks for your interest in contributing!

## Setup

```bash
git clone https://github.com/florextech/florex-ui.git
cd florex-ui
pnpm install
pnpm dev        # watch mode
pnpm storybook  # visual playground
```

## Adding a component

1. Create `src/components/Name/Name.tsx`
2. Create `src/__tests__/Name.test.tsx` (2-3 tests minimum)
3. Create `src/stories/Name.stories.tsx`
4. Create `docs/Name.mdx`
5. Export in `src/index.ts`

## Rules

- Props must be `Readonly<>`
- Use `cn()` from `../../utils/cn` for class merging
- Use `cva` from `class-variance-authority` for variants
- Use Tailwind canonical syntax: `text-(--muted)` not `text-[var(--muted)]`
- Use CSS variables for all colors: `var(--brand-700)`, never hardcoded hex
- Components that need icons internally should use `../../utils/icons` (Phosphor with text fallback)
- Use `forwardRef` for form elements (Input, Textarea, Select, etc.)

## Before submitting

```bash
pnpm lint       # eslint + tailwind canonical
pnpm typecheck  # tsc --noEmit
pnpm test       # vitest
pnpm build      # tsup
```

## Commits

Use [conventional commits](https://www.conventionalcommits.org/):

- `feat: add avatar component`
- `fix: resolve tooltip positioning`
- `docs: update button examples`
- `test: add select tests`
- `chore: update dependencies`
