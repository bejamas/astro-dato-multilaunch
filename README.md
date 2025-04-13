# MultiLaunch: Multi-Brand Website Template

![MultiLaunch Template Preview](https://www.datocms-assets.com/150921/1743700109-multi-launch.png)

A high-performance monorepo template built with Astro & DatoCMS for managing multiple brands effortlessly.
Ideal for startups and mid-sized retailers needing a scalable, cost-effective, and multi-language brand hierarchy.

## Demo
[Live Demo](https://astro-dato-multilaunch.vercel.app/en/)

## Tech Stack
- Astro
- DatoCMS
- Tailwind CSS 4

## Features
- ✅ Multi-Brand Architecture – One main site, multiple brand landing pages
- ✅ Rapid Deployment – Add a new brand in minutes, not weeks
- ✅ Monorepo Setup – All brands in one repository for easy management
- ✅ AI-Powered Translation – Multi-language support with AI-assisted translations
- ✅ Geo-Redirects – Serve region-specific content automatically
- ✅ Brand-Specific Customization – Each brand gets its own colors and assets
- ✅ Dark & Light Mode

## Quick Start
1. Create an account on DatoCMS
2. Deploy on Vercel with GitHub Integration
3. Let DatoCMS set up your project:

[![Clone DatoCMS project](https://dashboard.datocms.com/clone/button.svg)](https://dashboard.datocms.com/deploy?repo=bejamas%2Fastro-dato-multilaunch)

## Local Setup

### Prerequisites
- Node.js
- Bun

### Project Structure
```
multilaunch/
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
