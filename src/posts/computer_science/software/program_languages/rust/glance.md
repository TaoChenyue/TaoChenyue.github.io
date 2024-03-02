---
title: Rust开发环境搭建
icon: circum:edit
cover: https://resource.taochenyue.zone/api/random_image.php?type=horizontal&seed=20240224170748
date: 2024-02-10
---
<!-- more -->
## 安装
### On Linux/macOS
```sh
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```
Rust依赖GCC/Clang,如果是Ubuntu可以装build-essential
```sh
sudo apt install build-essential
```
### On Windows
对WSL来说，和Linux安装一样。也可以去[官网](https://www.rust-lang.org/tools/install)下32/64位可执行程序。

## Rust操作
```sh
#查看版本
rustc --version
#更新版本
rustup update
#卸载
rustup self uninstall
#查看API文档
rustup doc
#编译文件
rustc <file>
```

## Cargo(项目管理工具)操作
```sh
#创建项目
cargo new <project-name> 
#检查错误
cargo check
#编译项目,默认debug模式
cargo build
#编译项目,指定release模式
cargo build --release
#编译+运行项目
cargo run
```
Cargo.toml跟pyproject.toml类似，是项目配置文件，可以配置编译参数，依赖库等。

## Hello World
```rust
// main.rs
fn main() {
    println!("Hello, world!");
}
```

## 参考
+ [Rust程序语言](https://kaisery.github.io/trpl-zh-cn/)