# @florexlabs/ui

[![npm version](https://img.shields.io/npm/v/@florexlabs/ui.svg)](https://www.npmjs.com/package/@florexlabs/ui)
[![license](https://img.shields.io/npm/l/@florexlabs/ui.svg)](https://github.com/florextech/florex-ui/blob/main/LICENSE)
[![storybook](https://img.shields.io/badge/storybook-live-ff4785.svg)](https://florextech.github.io/florex-ui/)

Dark-first React component library built with **Tailwind CSS v4**, **TypeScript**, and **CVA**. 46+ accessible, composable components designed for modern web applications.

## Features

- 🌙 **Dark-first** — designed for dark interfaces with green/lime brand accents
- 🧩 **46+ components** — forms, data display, feedback, navigation, overlays, layout
- 🎨 **Design tokens** — CSS variables for colors, spacing, radius, shadows
- ♿ **Accessible** — semantic HTML, ARIA attributes, keyboard navigation
- 📦 **Tree-shakeable** — ESM + CJS, only import what you use
- 🎯 **TypeScript** — full type safety with exported types
- 💚 **Phosphor Icons** — optional integration with [Phosphor Icons](https://phosphoricons.com/)

## Install

```bash
pnpm add @florexlabs/ui
# peer dependencies
pnpm add react react-dom tailwindcss
# icons (optional, recommended)
pnpm add @phosphor-icons/react
```

## Quick Start

```tsx
// 1. Import the CSS tokens in your app entry
import "@florexlabs/ui/florex.css";

// 2. Use components
import { Button, Card, Badge, Input } from "@florexlabs/ui";

function App() {
  return (
    <Card variant="hover">
      <Input placeholder="Enter your email" />
      <Button variant="primary">Subscribe</Button>
      <Badge tone="brand">New</Badge>
    </Card>
  );
}
```

## Components

### Forms
`Button` · `IconButton` · `Input` · `Textarea` · `Select` · `Checkbox` · `Radio` · `Switch` · `Label` · `FormMessage`

### Data Display
`Card` · `Badge` · `Tag` · `Avatar` · `Table` · `Code` · `CodeBlock` · `Kbd` · `Status` · `Stat` · `DataList`

### Typography
`Heading` · `Text` · `Blockquote` · `Highlight` · `List`

### Feedback
`Alert` · `EmptyState` · `Spinner` · `Skeleton` · `Progress`

### Navigation
`Tabs` · `Accordion` · `Breadcrumb` · `Pagination` · `Steps` · `Menu`

### Overlays
`Modal` · `Drawer` · `Popover` · `Tooltip`

### Layout
`Container` · `Section` · `Navbar` · `Stack` · `Divider` · `Timeline` · `TreeView`

### Utility
`VisuallyHidden` · `cn()`

## Icons

We recommend [Phosphor Icons](https://phosphoricons.com/) — 9,000+ icons in 6 weights that match the Florex design system.

```tsx
import { Plus, Gear, Warning } from "@phosphor-icons/react";
import { Button, IconButton, Alert } from "@florexlabs/ui";

<Button><Plus size={16} weight="bold" /> Create</Button>
<IconButton icon={<Gear size={18} />} aria-label="Settings" variant="ghost" />
<Alert variant="warning" icon={<Warning size={18} />}>Check config</Alert>
```

Components like Pagination, Accordion, Breadcrumb, and Tag automatically use Phosphor icons when installed, with text fallbacks otherwise.

## Design Tokens

All tokens are available as CSS custom properties via `florex.css`:

```css
/* Colors */
--bg · --surface · --surface-muted · --foreground · --muted · --border
--brand-900 · --brand-700 · --brand-600 · --brand-500 · --brand-300
--danger · --warning · --success

/* Radius */
--radius-sm · --radius-md · --radius-lg · --radius-xl · --radius-full

/* Shadows */
--shadow-card · --shadow-glow

/* Typography */
--font-montserrat · --font-poppins
```

Tokens are also available as TypeScript objects:

```ts
import { colors, spacing, radius, shadows } from "@florexlabs/ui";
```

## Documentation

- **[Storybook](https://florextech.github.io/florex-ui/)** — live component playground
- **[docs/](./docs)** — MDX documentation with props tables and examples

## Development

```bash
pnpm install
pnpm dev          # watch mode
pnpm test         # run tests (153 tests)
pnpm storybook    # component playground
pnpm lint         # eslint + tailwind canonical
pnpm build        # production build
```

## License

[MIT](./LICENSE) © [Florex Labs](https://florexlabs.com)
