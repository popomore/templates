import argparse

from mylib.main import hello


def main() -> None:
    parser = argparse.ArgumentParser(description="mylib CLI")
    parser.add_argument("name", nargs="?", default="world", help="Name to greet")
    args = parser.parse_args()
    print(hello(args.name))


if __name__ == "__main__":
    main()
