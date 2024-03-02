---
title: Termux安装与使用
icon: arcticons:termux
cover: https://resource.taochenyue.zone/api/random_image.php?type=horizontal&seed=20240224170722
date: 2024-02-10
---
<!-- more -->
## 安装Termux
1. 在Android机安装Fdroid
2. 用Fdroid安装Termux
3. 准备一个VNC软件，Fdroid里面就有，比如AVNC

## Termux上的可视化界面
```sh
## 更换一个好的镜像,添加仓库地址
termux-change-repo
pkg install root-repo x11-repo
## 准备git，并关闭sslverify验证
pkg install git
git config --global http.sslverify false
## clone Github上的仓库
git clone https://github.com/Yisus7u7/termux-desktop-xfce.git --depth=1
## 网络不好的话,用github镜像地址,kgithub,ghproxy都行
cd termux-desktop-xfce
nano boostrap.sh
./boostrap.sh
./startdesktop.sh
```
## 使用Linux发行版
```sh
pkg install proot-distro
## 这里可能要镜像，可以在android里面开个代理，比如clash for android
proot-distro install ubuntu
proot-distro login ubuntu
## enjoy
```

## 参考
+ [F-Droid开源应用商店](https://f-droid.org/)
+ [Termux终端模拟器](https://termux.dev/cn/)