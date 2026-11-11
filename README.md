# AI/ML & Agentic Systems Portfolio

A personal portfolio website showcasing AI/ML engineering, agentic AI projects, experience, and technical skills.

## Overview

This is a single-page React application built with Vite and Tailwind CSS. It includes sections for projects, experience, and skills, plus interactive resume and agent-workflow modals.

## Tech stack

- React 18
- Vite 6
- Tailwind CSS
- Lucide React icons
- Vercel deployment configuration

## Getting started

**Requirements:** Node.js and npm.

```bash
git clone https://github.com/rithin-rakesh/portifolio.git
cd portifolio
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build for production

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`. A `vercel.json` file is included for Vercel deployments and client-side routing.

## Project structure

```text
src/                React components and application styling
public/             Public static assets
index.html          HTML entry point and page metadata
package.json        Dependencies and development commands
tailwind.config.js  Styling configuration
vercel.json         Deployment and routing configuration
```

## Maintenance

- Update projects, experience, and contact details in the corresponding `src/components/` files.
- Check external links and resume content before publishing.
- Compress large media for faster page loads. The repository currently includes a large MP4 asset.
- Keep personal contact details and published information intentional.

## Repository status

Portfolio source code. No automated test command is currently defined in `package.json`.

## License

No license has been declared in this repository. All rights are reserved unless a license is added.
