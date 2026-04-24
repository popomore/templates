"""Tests for main module."""

from {{project_name}}.main import hello


def test_hello_default():
    """Test hello with default name."""
    assert hello() == "Hello, world!"


def test_hello_custom():
    """Test hello with custom name."""
    assert hello("test") == "Hello, test!"
