use clap::Parser;
use mylib::hello;

#[derive(Parser)]
#[command(name = "mylib", about = "A Rust library")]
struct Cli {
    #[arg(default_value = "world")]
    name: String,
}

fn main() {
    let cli = Cli::parse();
    println!("{}", hello(&cli.name));
}
