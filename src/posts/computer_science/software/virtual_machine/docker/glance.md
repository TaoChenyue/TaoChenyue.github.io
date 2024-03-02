---
title: Docker常用命令
icon: mdi:docker
cover: https://resource.taochenyue.zone/api/random_image.php?type=horizontal&seed=20240224170756
date: 2024-02-10
---
<!-- more -->
### 基本概念
+ 镜像(Image): 一个root文件系统，静态的，打包后的东西。
+ 容器(Container): 在机器上运行后的Image实例，动态的，跑起来的东西。
+ 仓库(Repository): 文件系统里的代码，承载真正的核心流程。

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



## Win11下Docker Images/Container 存储设置
docker容器越用越多，如果担心占满，可以把docker数据移动到别的盘。

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

## 参考
+ [Docker](https://www.docker.com/)