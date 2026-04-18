pub fn hello(name: &str) -> String {
    format!("Hello, {name}!")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_hello_default() {
        assert_eq!(hello("world"), "Hello, world!");
    }

    #[test]
    fn test_hello_custom() {
        assert_eq!(hello("test"), "Hello, test!");
    }
}
