# Project Context: Final Portfolio

## Overview
This is a personal portfolio website project built with **React 19**, **TypeScript**, and **Vite**. It is designed as a Single Page Application (SPA) where navigation flows through different sections on a single page.

## Tech Stack
*   **Framework**: React (v19)
*   **Build Tool**: Vite (v7)
*   **Language**: TypeScript
*   **Styling**: Standard CSS (`App.css`, `index.css`)
*   **Linting**: ESLint

## Architecture & Structure
*   **Entry Point**: `src/main.tsx` mounts the application.
*   **Main Layout**: `src/App.tsx` serves as the primary layout, stacking components vertically:
    *   `Navbar`
    *   `Home`
    *   `About`
    *   `Services`
    *   `Portfolio`
    *   `Contact`
    *   `Footer`
*   **Components**: All UI sections are located in `src/components/`.
*   **Assets**: Images and static resources are stored in `src/assets/`.

## Key Files
*   `src/App.tsx`: Main component composing the page structure.
*   `src/components/Portfolio.tsx`: Displays project cards (Sit-in Monitoring, CLEARCAUSE, HomeOwners Associations).
*   `src/components/Contact.tsx`: A functional contact form (currently prevents default submission).

## Development Workflow
### Scripts
*   **Start Development Server**: `npm run dev`
*   **Build for Production**: `npm run build` (runs `tsc -b` followed by `vite build`)
*   **Lint Code**: `npm run lint`
*   **Preview Build**: `npm run preview`

### Conventions
*   **Components**: Functional components with `React.FC` typing are preferred (though implicit return typing is also common).
*   **File Naming**: PascalCase for components (e.g., `About.tsx`).
*   **Styling**: Component-specific styles seem to be aggregated or handled via global/shared CSS files like `App.css`.
