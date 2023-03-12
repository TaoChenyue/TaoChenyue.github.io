---
title: Git
icon: vscode-icons:file-type-git
order: 5
---

## 介绍
[官网](https://git-scm.com/)
开源的版本管理工具
## 常用命令

### 连接Github
工具：
1. [Watt Toolkit](https://steampp.net/)可用于指定网站，Github是其中之一。
2. [Clash for Windows](https://github.com/Fndroid/clash_for_windows_pkg/releases)
   + [节点](https://cdn.v2free.net)
   + 签到脚本直接github搜索v2freecheckin

### git代理
```bash
# set
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890
# unset
git config --global --unset http.proxy
git config --global --unset https.proxy
```