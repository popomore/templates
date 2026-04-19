# boilerplate

A collection of project boilerplates for quick project setup.

## Templates

### Libraries

| Template | Language | Description |
|----------|----------|-------------|
| [python-lib](boilerplates/python-lib) | Python | Python library + CLI with uv, pytest, mypy, ruff |
| [node-lib](boilerplates/node-lib) | TypeScript | npm package + CLI with Vitest |
| [rust-lib](boilerplates/rust-lib) | Rust | Rust crate + CLI with clap |

### Backend Services

| Template | Language | Description |
|----------|----------|-------------|
| [fastapi](boilerplates/fastapi) | Python | REST API with FastAPI, SQLAlchemy, OpenTelemetry |
| [cf-worker](boilerplates/cf-worker) | TypeScript | Cloudflare Worker with Hono |

### Frontend Apps

| Template | Language | Description |
|----------|----------|-------------|
| [dashboard](boilerplates/dashboard) | TypeScript/React | Admin dashboard with TanStack Router, Zustand, Tailwind CSS, Recharts |
| [landing](boilerplates/landing) | TypeScript/React | Landing page with Tailwind CSS, SEO meta tags |

## Presets

Presets are reusable configuration snippets that can be applied to Node.js boilerplates.

| Preset | Description |
|--------|-------------|
| [husky](presets/husky) | Git hooks with Husky, commitlint (Conventional Commits), lint-staged |

## Usage

Copy the template directory and rename it to your project name:

```bash
cp -r boilerplates/<template> /path/to/your-project
```

To apply a preset, copy its config files and manually merge `package.json`:

```bash
rsync -av --exclude package.json presets/<preset>/ /path/to/your-project/
# Then manually merge presets/<preset>/package.json into your project's package.json
```
