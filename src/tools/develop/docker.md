---
title: Docker
icon: vscode-icons:file-type-docker
order: 4
---

## 介绍
**Docker**本意**集装箱**，我的理解就是把系统打包装箱进一个地方。能够很好的隔离同一机器上的不同系统，同时不影响硬件使用。
### 基本概念
+ 镜像(Image): 一个root文件系统，静态的，打包后的东西。
+ 容器(Container): 在机器上运行后的Image实例，动态的，跑起来的东西。
+ 仓库(Repository): 文件系统里的代码，承载真正的核心流程。

## 安装docker
[官方文档](https://www.docker.com/)
桌面版、服务器版都可。
Windows系统安装需要先准备Linux内核（[WSL](wsl.md)）。

## 常用命令
```bash
# see all commands
docker
# see help info of command
docker [command] --help
# Image
# list all images
docker images
# get image from remote
docker pull [image-name]
# build image from .dockerfile
docker build -t [name]:[version] [project-dir] -f [dockerfile-path]
# remove image
docker rmi [image-name]
# Container
# list all containers
docker ps -a
# run image as a container
docker run -i -t [image-name] [command] --name [container-name]
# rename a container
docker rename [container-name-old] [container-name-new]
# update image from a container
docker commit -m="commit-message" -a="author" [container] [target-image:tag]
# start/stop/restart container
docker start/stop/restart [container]
# export container
docker export [container] > [target-file]
# import container
docker import [url/path] [container-name:tag]
# remove container
docker rm [container]
# retag container
docker tag [(container-name:tag)_old] [(container-name):tag_new]
# Repository
# login/logout docker hub
docker login/logout
# push to hub
docker push [container]
```

## dockerfile文件(build Image)
```bash
FROM
RUN
ENTRYPOINT
CMD

COPY
ADD

ENV
ARG
LABEL

VOLUME
EXPOSE

USER
WORKDIR

ONBUILD
HEALTHCHECK
```
指令格式```INSTRUCTION arguments```，推荐指令大写参数小写以便于理解。
文件必须以```FROM```指令开始，```#```用于注释


## Win11下Docker Images/Container 存储设置
docker容器越用越多，如果担心占满，可以把docker数据移动到别的盘。

[参考文章](https://blog.csdn.net/u013948858/article/details/111464534#:~:text=%E3%80%90Docker%E3%80%91win10%E4%B8%8A%E4%BF%AE%E6%94%B9docker%E7%9A%84%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8%E4%BD%8D%E7%BD%AE%EF%BC%88%E4%B9%9D%EF%BC%89-%20%E9%80%9A%E8%BF%87WSL2%E4%BF%AE%E6%94%B9%201%201.%E7%89%88%E6%9C%AC%E4%BF%A1%E6%81%AF%20window%2010%20v1909%20%E5%B0%8F%E7%89%88%E6%9C%AC%E5%8F%B7,%E4%BF%AE%E6%94%B9%E5%89%8D%E8%AE%B0%E5%BD%95%20C%3A%5CUsers%5Cjayzhen%5CAppData%5CLocal%5CDocker%5Cwsl%20%E7%9B%AE%E5%BD%95%E6%96%87%E4%BB%B6%E5%A4%A7%E5%B0%8F%EF%BC%88%E5%A4%A7%E4%BA%8E2G%EF%BC%89%20...%205%205.%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99%20%E4%BB%80%E4%B9%88%E6%98%AFLinux%E7%9A%84Windows%E5%AD%90%E7%B3%BB%E7%BB%9F%EF%BC%9F%20)

```bash
# stop docker-desktop in windows and wsl
wsl -t docker-desktop
wsl -t docker-desktop-data
# export data
wsl --export docker-desktop-data [target-file]
# unregister old data
wsl --unregister docker-desktop-data
# import data
wsl --import docker-desktop-data [mount-dir] [target-file] --version 2
# restart docker-desktop in windows
# if everything is ok, you can delete the target-file you created
```