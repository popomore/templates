# mylib

A Python library

## Prerequisite

```bash
# Install uv (https://docs.astral.sh/uv/)
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## Development

```bash
# Create virtual env + install project and dev deps
uv sync --group dev

# Run tests
uv run pytest

# Type check
uv run mypy src

# Lint
uv run ruff check src tests
```

## Build

```bash
uv build
```

## CLI

```bash
# Run via CLI
uv run mylib

# Or via python module
uv run python -m mylib
```
