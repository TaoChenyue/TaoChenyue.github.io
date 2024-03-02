---
title: MSYS2+Xmake在Windows上搭建简单的C++开发环境
icon: circum:edit
cover: https://resource.taochenyue.zone/api/random_image.php?type=horizontal&seed=20240224170733
date: 2023-10-31
---
<!-- more -->
```shell
# scoop安装msys2
scoop install msys2
# msys2初始化
msys2
# 进入mingw64环境
mingw64
# 更新包
pacman -Syu
# 搜索gcc
pacman -Ss gcc
# 把工具链装上
pacman -S xxxx_toolchain
# 查看gcc版本
gcc -v
# 安装Xmake
pacman -Ss Xmake
pacman -S xxx_Xmake
```
::: tip Xmake编译本地包遇到的问题
#include_next与-isystem冲突问题
add_requires("...",{external=false})
:::

## 参考
+ [Scoop](https://scoop.sh/)