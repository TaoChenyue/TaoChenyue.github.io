---
title: Git代理设置
icon: mdi:git
cover: https://resource.taochenyue.zone/api/random_image.php?type=horizontal&seed=20240224170718
date: 2023-10-31
---
<!-- more -->
## git代理
```bash
# set
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890
# unset
git config --global --unset http.proxy
git config --global --unset https.proxy
```

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