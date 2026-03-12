# {project_name}

{project_description}

## Install

```bash
pip install -e .
```

## Development

```bash
# Create virtual environment
python -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install -e ".[dev]"

# Run tests
pytest

# Type check
mypy src

# Lint
ruff check src tests
```

## Build

```bash
pip install build
python -m build
```
