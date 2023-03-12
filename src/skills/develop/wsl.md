---
title: WSL
icon: fa6-solid:w
order: 2
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

## 配置代理
安装clash for windows,开启Allow LAN

```bash
#!/bin/bash
host_ip=$(cat /etc/resolv.conf |grep "nameserver" |cut -f 2 -d " ")
export ALL_PROXY="http://$host_ip:7890"
git config --global http.proxy http://$host_ip:7890
git config --global https.proxy https://$host_ip:7890
```
保存成一个文件，运行```source <file-name>```

## 登录github
```bash
# 生成密钥
ssh-keygen -t rsa -C "your-email"
# 开启密钥管理器
eval "$(ssh-agent -s)"
# 添加私钥(删除也是这个，参数 -s)
ssh-add ~/.ssh/id_rsa
# 复制公钥，在GitHub页面上新建一个sshkey
cat ~/.ssh/id_rsa.pub
# 最后登录，yes就好
ssh -T git@github.com
```