# FAMA - Fastify, Angular, Mongo Application

Hello! 👋

This repository contains a full-stack portfolio project maintained by Michael Planu. It is an Nx monorepo holding an Angular frontend and a Fastify backend (MongoDB is used as the data store). The goal is to showcase projects and a personal timeline while providing a reproducible developer workflow.

**Tech stack:** Node.js, Fastify, Angular, MongoDB, Nx, pnpm, TypeScript

**Contents:** Brief instructions to get started, project layout, common commands, and contribution notes.

**Quick Links:**
- Frontend: `apps/angular-frontend`
- Backend: `apps/fastify-backend`
- Shared UI & utilities: `libs/shared-ui`, `libs/internal-plugin`

**Requirements**:
- Node.js (recommended >= 18)
- pnpm (package manager used in this repo)
- (Optional) Docker if you prefer running MongoDB in a container

## Quick start

1. Clone the repository:

	 ```bash
	 git clone <repo-url>
	 cd portfolio-full-stack-monorepo
	 ```

2. Install dependencies:

	 ```bash
	 pnpm install
	 ```

3. Start the apps in development mode (two common ways shown):

- Using Nx (recommended when available):

	```bash
	pnpm nx serve angular-frontend
	pnpm nx serve fastify-backend
	```

- Or run project-specific scripts (check `package.json` or `project.json` targets):

	```bash
	pnpm --filter angular-frontend dev
	pnpm --filter fastify-backend dev
	```

Note: exact commands may vary depending on local configuration; use `pnpm nx list` or inspect `project.json` in each project folder to confirm target names.

## Development

- Run unit tests for all projects:

	```bash
	pnpm nx test --all
	```

- Run lint across the workspace:

	```bash
	pnpm nx lint --all
	```

- Build projects:

	```bash
	pnpm nx build angular-frontend
	pnpm nx build fastify-backend
	```

## Project layout

Top-level folders you will work with:
- `apps/angular-frontend` — Angular application (frontend)
- `apps/fastify-backend` — Fastify server (backend)
- `libs/shared-ui` — UI components and shared styles
- `libs/internal-plugin` — custom Nx executors and utilities

There are also E2E and test-related projects under `apps/*-e2e`.

## Environment and configuration

- Frontend environment files: `apps/angular-frontend/src/environments/*`
- Backend configuration and plugins live under `apps/fastify-backend/src/app`

When running locally, ensure MongoDB is reachable. You can either run a local MongoDB instance, point the backend to a hosted DB, or run MongoDB in Docker:

```bash
docker run --name portfolio-mongo -p 27017:27017 -d mongo:6
```

## Contributing

- Keep changes focused to one feature or fix per branch.
- Follow the existing TypeScript and Angular style used in the repo.
- Run tests and linting locally before opening a PR:

	```bash
	pnpm nx test --all
	pnpm nx lint --all
	```

## Troubleshooting

- If you see dependency issues, run `pnpm install` again and consider clearing pnpm store: `pnpm store prune`.
- For Nx target names or scripts, inspect `project.json` inside the app directories.

## License

This project includes a `LICENSE.md` in the repository root. Please review it for licensing details.
