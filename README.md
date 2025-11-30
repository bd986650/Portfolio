# Portfolio Website

### Core Stack
- **React 19** - UI library
- **TypeScript** - type safety
- **Vite 7.2.4** - build tool and dev server
- **React Router DOM 7.9.6** - routing

### Styling & UI
- **Tailwind CSS 4.1.17** - utility-first CSS framework
- **Framer Motion 12.23.24** - animation library
- **Radix UI** - accessible UI components
  - `@radix-ui/react-accordion` - accordion for skills tree
  - `@radix-ui/react-scroll-area` - scroll area
  - `@radix-ui/react-slot` - component composition

### Additional Libraries
- **class-variance-authority** - CSS class variant management
- **clsx & tailwind-merge** - class name utilities
- **OGL** - WebGL library for liquid chrome effect
- **devicons-react** - technology icons
- **lucide-react** - interface icons
- **@tabler/icons-react** - additional icons

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # UI components
│   │   ├── icons/      # SVG icons
│   │   ├── about-cards.tsx
│   │   ├── animated-testimonials.tsx
│   │   ├── file-tree.tsx
│   │   ├── floating-navbar.tsx
│   │   ├── gradient-card.tsx
│   │   ├── liquid-chrome.tsx
│   │   ├── neon-gradient-card.tsx
│   │   ├── terminal.tsx
│   │   └── ...
│   └── DesktopOnly.tsx # Desktop-only access component
│
├── hooks/              # Custom React hooks
│   ├── use-desktop-check.tsx
│   ├── use-file-tree.tsx
│   ├── use-floating-navbar.tsx
│   ├── use-parallax-text.tsx
│   ├── use-resize-observer.tsx
│   ├── use-terminal-ready.tsx
│   ├── use-testimonials-navigation.tsx
│   ├── use-text-generate-effect.tsx
│   └── use-typing-effect.tsx
│
├── lib/                # Utilities and data
│   ├── data/           # Project data
│   │   ├── about-cards.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── types.tsx
│   │   └── index.tsx
│   └── utils/          # Utilities
│       ├── wrap.ts
│       └── utils.ts
│
├── pages/              # Application pages
│   ├── Home.tsx        # Home page with terminal
│   └── Portfolio.tsx   # Portfolio page
│
└── sections/           # Portfolio sections
    ├── About.tsx       # About me
    ├── Contacts.tsx    # Contacts
    ├── Hero.tsx        # Hero section
    ├── Marquee.tsx     # Marquee text
    ├── NavBar.tsx      # Navigation
    ├── Projects.tsx    # Projects
    ├── Skills.tsx      # Skills
    └── skills-tree.tsx # Skills tree
```

## 🛠️ Development

### Install Dependencies
```bash
bun install
# or
npm install
```

### Run Dev Server
```bash
bun run dev
# or
npm run dev
```

### Build for Production
```bash
bun run build
# or
npm run build
```

### Preview Production Build
```bash
bun run preview
# or
npm run preview
```

### Linting
```bash
bun run lint
# or
npm run lint
```
