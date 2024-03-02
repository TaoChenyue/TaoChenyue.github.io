---
title: SSH(Secure Shell)基本操作
icon: devicon:ssh-wordmark
cover: https://resource.taochenyue.zone/api/random_image.php?type=horizontal&seed=20240224170720
date: 2023-10-31
---

<!-- more -->
声明:
+ host:主机地址 
+ port:端口号
+ hostname:别名或者```[host]:port```
+ file:文件位置
## 安装
```sh
apt install openssh-client openssh-server
```
## 连接
```sh
ssh user@host -p port
```
### 额外参数
+ ```-f``` ssh后台运行
+ ```-q``` 安静模式
+ ```-n``` 关闭标准输入
+ ```-C``` 为压缩数据
+ ```-T``` 禁止远程分配终端
+ ```-N``` 不执行远程命令
+ ```-X``` 调用图形界面

## 密钥配置
```sh
# 按照算法生成公钥/私钥 -> ~/.ssh/id_xxx.pub ~/.ssh/id_xxx
ssh-keygen -t dsa|ecdsa|ecdsa-sk|ed25519|ed25519-sk|rsa -f file -C "comment注释"
# 查看hostname的密钥
ssh-keygen -F [host]:port
# 删除hostname的密钥
ssh-keygen -R [host]:port
```
## 免密登录
```sh
## on linux/mac
ssh-copy-id user@host -p port
## on windows
ssh user@host -p port 'mkdir -p .ssh && cat >> .ssh/authorized_keys' < ~/.ssh/id_rsa.pub
```
## 配置别名
```sh
vim ~/.ssh/config
## 内容
Host 别名
    HostName IP地址
    User 用户名
    Port 端口
## 
```
## 传送文件(夹)
```sh
scp {本机地址/远程地址} {本机地址/远程地址}
```
+ ```-r```传送文件夹
+ ```-P```指定端口
+ 远程地址在前面加```user@host:```

## 代理
### 正向-L(本机端口到远程端口)
```sh
# host1:port1 -> host2:port2
host1> ssh -L host1:port1:host2:port2 user2@host2
# host0:port0 -> host1:port1 -> host2:port2
host0> ssh -L host0:port0:host2:port2 user1@host1
```
### 反向-R(远程端口到本机端口)
```sh
vim /etc/ssh/sshd_config
## 内容
GatewayPorts yes   
## 
# host1:port1 -> host2:port2
host0> ssh -R host1:port1:host2:port2 user1@host1
```
### socks5代理
把socks5托管给另一台机器
```sh
host0> ssh -D host0:socks-port host1
```

