---
title: WSL
icon: fa6-solid:w
order: 3
---

## 参考
[WSL官方文档](https://learn.microsoft.com/zh-cn/windows/wsl/)

## 介绍
Windows Subsystem for Linux 能让开发者在Windows平台上使用Linux环境的工具。相比于虚拟机、多系统，性能更好、使用更方便。

## 准备
+ 高版本Win10 或 Win11(推荐)
+ 在控制面板>程序与功能中开启虚拟机平台(Hyper-V)选项
+ 重启电脑,```wsl -v```看看是否输出版本信息
  
## 基本使用
+ ```wsl --help```快速查询功能
+ ```wsl --install```安装linux发行版
+ ```wsl -d <distro>```运行指定发行版
