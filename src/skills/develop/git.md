---
title: Git
icon: vscode-icons:file-type-git
order: 5
---

## 介绍
[官网](https://git-scm.com/)
开源的版本管理工具
## 常用命令

### 连接外网
[Watt Toolkit](https://steampp.net/)可用于指定网站，Github是其中之一。
加速了Github后可以通过[Clash for Windows](https://github.com/Fndroid/clash_for_windows_pkg/releases)+[节点](https://cdn.v2free.net)实现访问外网。
对于WSL，可以在Clash中开启允许LAN后，在WSL中设置代理来访问外网。
```bash
export ALL_PROXY="http://your-ip:port"
```
IP是本机的局域网ip，端口号看Clash的设置，默认是7890。

### git代理
```bash
# set
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890
# unset
git config --global --unset http.proxy
git config --global --unset https.proxy
```