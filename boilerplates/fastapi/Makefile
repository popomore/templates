install:
	uv sync --group dev

dev:
	uvicorn app.main:app --reload --uds /tmp/myapp.sock

test:
	pytest tests/

lint:
	ruff check --fix

clean:
	find . -type f -name "*.pyc" -delete
	find . -type d -name "__pycache__" -delete

.PHONY: install dev test lint clean
