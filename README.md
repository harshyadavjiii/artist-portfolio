# Swati Yadav Artist Portfolio

A responsive personal portfolio for **Swati Yadav**, presenting her work across agronomy, crop research, travel photography, paintings, and visual storytelling. The site is designed as a polished client-facing experience with a warm editorial visual language, responsive navigation, interactive artwork presentation, and light/dark themes.

## What The Product Includes

- A home page with Swati's introduction, professional highlights, interactive artist avatar, contact call-to-action, and featured showcase.
- An About page covering her personal philosophy, travel interests, agronomy work, and research experience.
- A Journal page containing 33 travel diary frames with titles, excerpts, and links to full scenery entries.
- A Contact page with an email call-to-action and current availability statement.
- Detail pages for six featured artworks, including the image, medium/type, description, additional details, and enquiry link.
- Detail pages for 33 scenery entries, each with a travel-diary title, image, introduction, and four written notes.
- Responsive desktop and mobile navigation with active-route highlighting and an animated mobile menu.
- A light/dark theme switcher. The selected theme is stored in the browser using `localStorage`, and the first visit follows the visitor's operating-system preference.
- Optimized local images rendered with Next.js `Image` for responsive sizing and loading behavior.

## Technology Stack

Versions below are taken from `package.json`. Packages using `^` may resolve to a compatible newer minor or patch release when dependencies are installed without a lockfile.

### Runtime and framework

- **Next.js 16.2.3**: React framework using the App Router, file-based routing, server components, static generation, metadata, and image optimization.
- **React 19.2.4**: UI component library.
- **React DOM 19.2.4**: React browser rendering package.
- **TypeScript 5**: Static typing for the TypeScript application files.
- **Node.js**: Use Node.js 20.9 or newer, which is appropriate for the Next.js 16 toolchain. npm is included with Node.js.

### Styling and UI behavior

- **Tailwind CSS 4**: Utility-first styling, imported in `app/globals.css`.
- **`@tailwindcss/postcss`**: Tailwind CSS PostCSS integration.
- **CSS custom properties**: Central theme tokens in `app/globals.css` control colors, surfaces, typography, gradients, borders, and light/dark theme values.
- **Framer Motion 12.38.0**: Installed for motion-based experiences and available for future animation work.
- **Lenis 1.3.21**: Installed for smooth scrolling integrations.
- **`@studio-freight/lenis` 1.0.42**: Legacy Lenis package retained as a dependency for the experimental experience file.
- **`@react-three/fiber` 9.6.0** and **`@react-three/drei` 10.7.7**: Installed for the experimental 3D portfolio concept in `app/page00.tsx`.

### Developer tooling

- **ESLint 9** with `eslint-config-next` **16.2.3**: Code-quality and Next.js best-practice checks.
- **TypeScript React type packages**: `@types/react` 19, `@types/react-dom` 19, and `@types/node` 20.
- **PostCSS**: Configured through `postcss.config.mjs` for Tailwind processing.

## Requirements

Before starting, install:

1. **Node.js 20.9 or newer**. Confirm it with `node --version`.
2. **npm**, included with Node.js. Confirm it with `npm --version`.
3. A modern browser such as Chrome, Edge, Firefox, or Safari.
4. The project source folder and its local `public/images` media assets.

No database, external CMS, API key, environment variable, or backend service is currently required. All portfolio content is stored in the source code and all referenced production media is stored locally under `public/images`.

## Installation And First Run

Open PowerShell, Command Prompt, or a terminal in the project root, the folder containing `package.json`.

### 1. Install dependencies

```bash
npm install
```

This creates or updates `node_modules` using the dependency definitions in `package.json`.

### 2. Start the development server

```bash
npm run dev
```

Next.js starts a local development server, normally at:

```text
http://localhost:3000
```

Open that address in a browser. Changes to files in `app/` are reflected automatically during development. Stop the server with `Ctrl+C`.

### 3. Check the main pages

Use the navigation or open these URLs directly:

| URL | Purpose |
| --- | --- |
| `/` | Home page and featured showcase |
| `/about` | Professional and personal profile |
| `/blog` | Travel journal with 33 scenery frames |
| `/contact` | Contact and availability information |
| `/paintings/golden-silence` | Example artwork detail page |
| `/scenery/scenery01` | Example scenery diary detail page |

### 4. Run the quality checks

```bash
npm run lint
npm run build
```

`npm run lint` runs ESLint. `npm run build` creates a production build and catches compilation, routing, and type-related issues that may not be visible during casual browsing.

### 5. Run the production build locally

After a successful build, run:

```bash
npm run start
```

Visit `http://localhost:3000` again. This serves the compiled production version rather than the development version.

## Project Structure

```text
artist-portfolio/
├── app/
│   ├── page.tsx                 # Home page and featured showcase
│   ├── layout.tsx               # Global metadata, navigation, and document shell
│   ├── globals.css              # Tailwind import and complete visual theme system
│   ├── site-nav.tsx             # Desktop/mobile navigation and active route state
│   ├── theme-toggle.tsx         # Light/dark mode and localStorage persistence
│   ├── artist-avatar.tsx        # Interactive CSS-built artist illustration
│   ├── portfolio-data.ts        # Artwork records and detail-page content
│   ├── scenery-data.ts          # Generated scenery records and diary copy
│   ├── about/page.tsx            # About page
│   ├── blog/page.tsx             # 33-frame travel journal index
│   ├── contact/page.tsx          # Contact page
│   ├── paintings/[slug]/page.tsx # Dynamic artwork detail route
│   ├── scenery/[slug]/page.tsx   # Dynamic scenery diary route
│   ├── page00.tsx                # Unused experimental 3D/cinematic concept
│   └── artist_portfolio_next.jsx # Unused early portfolio concept
├── public/
│   ├── images/                   # Local portrait, artwork, scenery, and science media
│   └── videos/                   # Additional MP4 media, not used by current routes
├── eslint.config.mjs             # ESLint and Next.js rules
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # Tailwind PostCSS plugin configuration
├── tsconfig.json                 # Strict TypeScript configuration and path alias
└── package.json                  # Scripts and dependency versions
```

## Content Management For The Client

This version is intentionally file-based, so content updates are made in the repository rather than through an admin dashboard.

### Updating artwork

Edit `app/portfolio-data.ts`. Each artwork has:

- `slug`: URL-safe identifier used in `/paintings/[slug]`.
- `image`: path to an image in `public`, for example `/images/painting01.jpg`.
- `aspectRatio`: display ratio such as `3 / 4` or `1 / 1`.
- `type`: `Photography` or `Painting`.
- `title`: visible work title.
- `description`: short showcase and detail-page description.
- `details`: longer detail-page text.

When adding an artwork, add its image to `public/images`, then add a complete record to the `artworks` array. The dynamic route automatically creates its static page through `generateStaticParams`.

### Updating scenery and journal entries

Edit `app/scenery-data.ts` for scenery detail content. The file currently generates 33 entries from title, aspect-ratio, and copy arrays. The image naming convention is:

```text
public/images/scenery01.jpeg
public/images/scenery02.jpeg
...
public/images/scenery33.jpeg
```

The Journal index has its own presentation order, titles, and excerpts in `app/blog/page.tsx`. If the number of entries changes, update the related arrays and the journal order together.

### Updating the email address

The current email, `swati@somewhere.com`, is a placeholder used in `app/page.tsx` and `app/contact/page.tsx`. Replace both occurrences with the final client email before launch. Also check the contact card in the home page and any future metadata or social links.

### Updating profile text and images

- Home introduction and highlights: `app/page.tsx`.
- About copy and journey sections: `app/about/page.tsx`.
- About portrait: `public/images/avataar.jpeg`.
- About journey images: paths near the top of `app/about/page.tsx`.
- Site title and SEO description: `app/layout.tsx`.

## Media Guidelines

All current production media is local. A file in `public` is served from the site root, so `public/images/avataar.jpeg` is referenced in code as `/images/avataar.jpeg`.

When replacing images:

1. Keep filenames and extensions consistent with their references, or update the corresponding data record.
2. Use appropriately sized, optimized images to keep gallery pages fast.
3. Keep meaningful `alt` text when changing image usage.
4. Check both light and dark themes and both mobile and desktop layouts after replacing artwork.

The `public/videos` directory contains `painting04-vid.mp4`, `painting05-vid.mp4`, and `painting06-vid.mp4`. These files are available for future use but are not referenced by the currently active routes.

## Routing And Rendering Notes

The project uses the Next.js App Router. Folders inside `app/` become URL segments, and `[slug]` folders are dynamic routes. Artwork and scenery pages use `generateStaticParams`, so known entries can be generated ahead of time during a production build. Unknown slugs call `notFound()` and show the framework's not-found behavior.

Most page components are server components by default. `site-nav.tsx`, `theme-toggle.tsx`, and `artist-avatar.tsx` are client components because they use browser state, browser APIs, or pointer events.

The site does not currently include a contact form submission API, authentication, database, shopping cart, CMS, analytics integration, or social-media feed. The contact action is a standard `mailto:` link and depends on the visitor having an email application configured.

## Deployment

The project can be deployed to any hosting provider that supports Next.js 16. Vercel is the most direct option, but a Node.js host can also run the compiled application.

### Vercel deployment

1. Push the project to a Git provider.
2. Import the repository into Vercel.
3. Keep the detected framework as Next.js.
4. Use `npm install` for installation and `npm run build` for the build command if Vercel does not detect them automatically.
5. Deploy and test every route, image, theme switch, and email link on the live domain.

### Node.js deployment

```bash
npm install
npm run build
npm run start
```

The production server listens on port `3000` by default. The hosting provider may provide a `PORT` value automatically.

Before launch, confirm that the final email address, profile copy, image rights, metadata, domain, and any required privacy or analytics requirements have been supplied by the client.

## Available Commands

| Command | What it does |
| --- | --- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts the development server with hot reload |
| `npm run lint` | Runs ESLint checks |
| `npm run build` | Creates and validates the production build |
| `npm run start` | Starts the compiled production server |

## Troubleshooting

### Port 3000 is already in use

Stop the other process or start Next.js on another port:

```bash
npm run dev -- --port 3001
```

Then open `http://localhost:3001`.

### An image is missing

Check that the file exists under `public/images` and that the source path begins with `/images/`. Paths are case-sensitive on many production hosts.

### Theme preference looks incorrect on first load

The theme is selected in the browser after hydration. A saved `swati-portfolio-theme` value in `localStorage` takes priority over the operating-system preference. Clear that browser storage entry to test the first-visit behavior again.

### Build or lint errors appear

Confirm that Node.js is 20.9 or newer, dependencies are installed, and the command is being run from the project root. Then run `npm run lint` and `npm run build` separately so the first reported issue is easier to identify.

## Further Reference

- [Next.js documentation](https://nextjs.org/docs)
- [React documentation](https://react.dev/)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)
