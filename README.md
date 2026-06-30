# TPM Study Library

A production-ready interactive web application for studying TPM (Technical Program Manager) interview content. Built with **Next.js** and deployable to **Vercel** for free.

**[View Live Demo →](https://tpm-study.vercel.app)**

---

## Features

- **📚 17 Markdown Documents** — Study plan, frameworks, competencies, interview prep, 320+ questions
- **🔍 Full-Text Search** — Pre-built search index for instant results across all documents
- **🌓 Dark/Light Theme** — Toggle via sidebar, persists across sessions
- **📱 Responsive Design** — Works on desktop, tablet, and mobile
- **⚡ Static Site Generation** — Pre-rendered at build time for instant load
- **⌨️ Keyboard Shortcuts** — Press `/` to search, `Escape` to close
- **🔗 Cross-Document Links** — Internal .md references link to the correct pages

---

## Project Structure

```
tpm-study/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with metadata
│   ├── client-layout.tsx         # Client layout (sidebar, topbar)
│   ├── page.tsx                  # Welcome / home page
│   ├── globals.css               # Global styles
│   └── docs/[slug]/              # Dynamic document pages (SSG)
│       ├── page.tsx              # Server component — reads markdown at build time
│       └── document-client.tsx   # Client component — markdown rendering
├── components/
│   ├── Sidebar.tsx               # Navigation sidebar with search
│   ├── TopBar.tsx                # Top bar with mobile menu toggle
│   └── MarkdownRenderer.tsx      # react-markdown with plugins
├── lib/
│   ├── docs.ts                   # Document registry (metadata)
│   └── markdown.ts               # Markdown reading utilities
├── content/                      # Your markdown study files (source)
│   ├── INDEX.md
│   ├── ROADMAP.md
│   ├── 01_TPM_24_Week_*.md
│   └── ...                       # All 17 markdown documents
├── scripts/
│   └── generate-search-index.cjs # Build-time script for search index
├── public/
│   ├── content/                  # Auto-generated: markdown files for client-side search
│   └── search-index.json         # Auto-generated: pre-built search index
├── next.config.js                # Next.js configuration (static export)
├── vercel.json                   # Vercel deployment configuration
├── package.json
└── README.md
```

---

## Organizing Your Markdown Content

Place your markdown files in the `content/` directory. The app reads all files from here at build time.

### File Naming Convention

Files follow this pattern:
```
content/
├── INDEX.md                      # Main navigation index (optional)
├── ROADMAP.md                    # Learning roadmap (optional)
├── 01_TPM_24_Week_Consolidated_Study_Plan.md
├── 02_TPM_Frameworks_Beginners_Guide.md
├── ...
└── core/                         # Subdirectories supported
    └── TPM_Transition_24_Week_Playbook_v5.md
```

### Registering New Documents

To add a new document, update `lib/docs.ts`:

```typescript
export const DOCS: DocMeta[] = [
  // Add your document:
  {
    id: 'my-new-doc',           // URL slug
    file: 'my-new-document.md', // Path relative to content/
    title: 'My New Document',   // Display title
    group: 'Core Knowledge',    // Group: 'Start Here' | 'Core Knowledge' | 'Deep Dive' | 'Interview Prep'
    icon: '📝',                 // Emoji icon
    badge: '',                  // Optional badge text
  },
  // ... existing docs
];
```

Then rebuild: `npm run build`

---

## Local Development

### Prerequisites

- **Node.js** 18.17+ (recommended: 20.x LTS)

### Setup

```bash
# 1. Navigate to the project directory
cd tpm-study

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The dev server supports hot reloading — changes to components refresh instantly. Note that markdown content changes require a page refresh (content is read at build time or dev server start).

### Build for Production

```bash
npm run build
```

This generates a static `out/` directory with the complete site. You can serve it with any static file server:

```bash
npx serve out/
```

---

## Vercel Deployment Guide

### Option 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   # Create a new repository on GitHub, then:
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/tpm-study.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign up / sign in (use GitHub)
   - Click **"Add New" → "Project"**
   - Select your `tpm-study` repository
   - Vercel auto-detects Next.js (settings are pre-configured in `vercel.json`)
   - Click **"Deploy"**
   - Wait ~2 minutes for the build to complete

3. **Access your live site:**
   - Vercel assigns a URL like `https://tpm-study.vercel.app`
   - You can configure a custom domain in Project Settings → Domains

### Option 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts. For production:
vercel --prod
```

### Enable Auto-Deploys

Vercel automatically deploys every time you push to the `main` branch:
1. Make changes locally
2. Commit and push: `git push origin main`
3. Vercel automatically rebuilds and deploys
4. Your live site updates within minutes

### Custom Domain (Optional)

1. In Vercel dashboard, go to your project → **Settings** → **Domains**
2. Enter your domain (e.g., `tpm-study.yourname.com`)
3. Follow Vercel's DNS configuration instructions for your domain provider

---

## Sharing Your Site

After deployment, you can share the live URL with anyone. The site is fully static and loads instantly on all devices.

**Example URL format:** `https://tpm-study.vercel.app`

---

## Performance Optimizations

- **Static Site Generation (SSG):** All pages pre-rendered at build time
- **Pre-built Search Index:** Search index generated at build time, avoiding client-side parsing
- **Minimal JavaScript:** Core components only ~30KB gzipped
- **CSS Variables:** Theme switching without re-rendering
- **Lazy Content Loading:** Search index loaded lazily on first search interaction
- **Optimized Markdown Rendering:** Using react-markdown with selective plugins

---

## Troubleshooting

### Content not loading after deployment
The `prebuild` script copies `content/` to `public/content/`. If files are missing:
```bash
node scripts/generate-search-index.cjs
npm run build
```

### Search not working
Check that `public/search-index.json` was generated:
```bash
# Should show search-index.json with content
ls -la public/
```

### Build errors
```bash
# Clear Next.js cache and rebuild
rm -rf .next out public/content public/search-index.json
npm run build
```

---

## License

MIT — Built for Biren, June 2026
