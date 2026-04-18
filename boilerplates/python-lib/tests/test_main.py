from mylib.main import hello


def test_hello_default():
    assert hello() == "Hello, world!"


def test_hello_custom():
    assert hello("test") == "Hello, test!"
