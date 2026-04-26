# @florexlabs/ui

Florex Labs shared UI library — dark-first React components and design tokens built with Tailwind CSS v4, CVA, and TypeScript.

## Install

```bash
pnpm add @florexlabs/ui
# peer deps
pnpm add react react-dom tailwindcss
# icons (recommended)
pnpm add @phosphor-icons/react
```

## Icons

Florex UI uses [Phosphor Icons](https://phosphoricons.com/) as the recommended icon library. Phosphor provides 9,000+ icons in 6 weights (thin, light, regular, bold, fill, duotone) that match the Florex design system.

```tsx
import { Gear, Plus, TrashSimple, Warning } from "@phosphor-icons/react";
import { Button, IconButton, Alert } from "@florexlabs/ui";

<Button><Plus size={16} weight="bold" /> Create Bot</Button>
<IconButton icon={<Gear size={18} />} aria-label="Settings" variant="ghost" />
<Alert variant="warning" icon={<Warning size={18} />}>Check your config</Alert>
```

Phosphor is an optional peer dependency — you can use any icon library, but Phosphor is what all Florex Labs projects standardize on.

## Setup

Import the CSS tokens in your app entry point:

```ts
import "@florexlabs/ui/florex.css";
```

This provides all `:root` CSS variables, body background, typography defaults, and selection styles.

## Components

### Button

```tsx
import { Button } from "@florexlabs/ui";

<Button variant="primary" size="md">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="ghost" size="sm">Edit</Button>
<Button variant="danger" loading>Deleting…</Button>
```

Variants: `primary` | `secondary` | `ghost` | `danger`
Sizes: `sm` | `md` | `lg`

### Card

```tsx
import { Card } from "@florexlabs/ui";

<Card>Default card with p-6</Card>
<Card variant="hover" padding="lg">Hover glow card</Card>
<Card variant="muted" padding="sm">Muted surface</Card>
```

### Badge

```tsx
import { Badge } from "@florexlabs/ui";

<Badge tone="brand">New</Badge>
<Badge tone="danger">Error</Badge>
<Badge tone="warning">Beta</Badge>
```

Tones: `neutral` | `brand` | `success` | `warning` | `danger`

### Input & Textarea

```tsx
import { Input, Textarea } from "@florexlabs/ui";

<Input placeholder="Email" type="email" />
<Textarea placeholder="Message" rows={4} />
```

### Modal

```tsx
import { Modal, Button } from "@florexlabs/ui";

<Modal open={isOpen} onClose={() => setIsOpen(false)}>
  <h2>Confirm</h2>
  <p>Are you sure?</p>
  <Button onClick={() => setIsOpen(false)}>Close</Button>
</Modal>
```

### EmptyState

```tsx
import { EmptyState, Button } from "@florexlabs/ui";

<EmptyState
  title="No bots yet"
  description="Create your first bot to get started."
  action={<Button size="sm">Create Bot</Button>}
/>
```

### Spinner

```tsx
import { Spinner } from "@florexlabs/ui";

<Spinner className="size-6" />
```

## Layouts

### Container

```tsx
import { Container } from "@florexlabs/ui";

<Container>Content with max-w-[1280px] and responsive padding</Container>
```

### Section

```tsx
import { Section } from "@florexlabs/ui";

<Section eyebrow="Features" title="Why Florex?" description="Built for developers." glow>
  <div className="grid grid-cols-3 gap-6">{/* cards */}</div>
</Section>
```

### Navbar

```tsx
import { Navbar, Button } from "@florexlabs/ui";

<Navbar logo={<span>Florex</span>} actions={<Button size="sm">Sign In</Button>}>
  <a href="/docs">Docs</a>
  <a href="/blog">Blog</a>
</Navbar>
```

## Tokens

```ts
import { colors, spacing, radius, shadows } from "@florexlabs/ui";

colors.brand[700]; // "#d7ff6d"
spacing.lg;        // "1.5rem"
radius.xl;         // "1.5rem"
shadows.glow;      // glow shadow string
```

## Utility

```ts
import { cn } from "@florexlabs/ui";

cn("px-4 py-2", isActive && "bg-brand-700", className);
```

## CSS Variables

All tokens are available as CSS custom properties via `florex.css`:

```
--bg, --surface, --surface-muted, --foreground, --muted, --border
--brand-900, --brand-700, --brand-600, --brand-500, --brand-300
--danger, --warning, --success
--radius-sm, --radius-md, --radius-lg, --radius-xl, --radius-full
--shadow-card, --shadow-glow
--font-montserrat, --font-poppins
```

## Migration Notes

### From chatbot-studio-app
1. Replace local `lib/utils.ts` (`cn`) with `import { cn } from "@florexlabs/ui"`
2. Replace `components/ui/button.tsx` with `import { Button } from "@florexlabs/ui"`
3. Replace `components/feedback/empty-state.tsx` with `import { EmptyState } from "@florexlabs/ui"`
4. Import `@florexlabs/ui/florex.css` in `app/globals.css` and remove duplicated `:root` tokens

### From florex-labs-landing / logcat-desk-web (Astro)
1. Import `@florexlabs/ui/florex.css` in your global CSS and remove duplicated `:root` tokens
2. For React components, add `@astrojs/react` and use them in `.astro` files as client islands
3. Or continue using Astro components and just consume the CSS tokens

## License

MIT
