"""Main module."""

from pydantic import BaseModel


class Config(BaseModel):
    """Configuration."""

    debug: bool = False


def hello(name: str = "world") -> str:
    """Hello function.

    Args:
        name: Name to greet.

    Returns:
        Greeting message.
    """
    return f"Hello, {name}!"


if __name__ == "__main__":
    print(hello())
