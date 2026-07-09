# LivePracticeDashboard

A web application for musicians to manage their repertoire and track practice sessions.

## Project Overview

LivePracticeDashboard is a practice management tool designed for musicians. It allows users to:

- **Manage repertoire**: Add, view, and organize songs with details like title, key, lyrics, and whether the track is a cover.
- **Track practice time**: Start a live practice session for any song with a built-in timer. The accumulated practice time is saved and persisted locally.
- **View lyrics**: Access song lyrics inline during practice sessions to keep everything in one place.

## Prerequisites

- Node.js >= 18
- pnpm (or npm/yarn)

## Setup

1. Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd LivePracticeDashboard
pnpm install
```

2. Start the development server:

```bash
pnpm dev
```

3. Open the app in your browser at `http://localhost:5173`.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build
