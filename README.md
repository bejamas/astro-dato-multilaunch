# BeVerse: Multi-Brand Retail Template

A monorepo Astro and DatoCMS theme designed for retail companies to showcase multiple brands and products with ease.

## Demo
[Live Demo](https://astro-dato-beverse.vercel.app/en/)

## Tech Stack
- Astro
- DatoCMS
- Tailwind CSS 4

## Features
- ✅ Seamless multilingual support
- ✅ AI-powered translation
- ✅ Multi-tenancy brand management
- ✅ Geo-redirects
- ✅ Rapid brand page deployment
- ✅ Dark & light mode
- ✅ Brand-specific color selection

## Quick Start
1. Create an account on DatoCMS
2. Set up GitHub integration on Vercel
3. Let DatoCMS set up your project:

[Deploy to DatoCMS]()

## Local Setup

### Prerequisites
- Node.js
- Bun

### Project Structure
```
beverse/
├── apps/
│   ├── core/       # Main retail company page
│   └── brands/     # Brand landing pages
└── packages/
    └── ui/         # Shared UI components
```

### Getting Started
```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env
```

### Environment Variables
1. Go to DatoCMS project Settings
2. Navigate to API tokens
3. Copy Read-only API token
4. Paste into `.env` file

## Available Scripts
```bash
# Run development server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Contributing
Contributions are welcome!
