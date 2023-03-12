---
title: Git
icon: vscode-icons:file-type-git
order: 5
---

## 介绍
[官网](https://git-scm.com/)
开源的版本管理工具

## git代理
```bash
# set
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890
# unset
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## 连接Github
工具：
1. [Watt Toolkit](https://steampp.net/)可用于指定网站，Github是其中之一。
2. [Clash for Windows](https://github.com/Fndroid/clash_for_windows_pkg/releases)
   + [节点](https://cdn.v2free.net)
   + 签到脚本直接github搜索v2freecheckin
3. fastgithub

### 对于WSL:
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