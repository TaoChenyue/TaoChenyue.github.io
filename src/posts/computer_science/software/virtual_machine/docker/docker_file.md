---
title: DockerFile格式
icon: mdi:docker
cover: https://resource.taochenyue.zone/api/random_image.php?type=horizontal&seed=20240224170755
date: 2023-10-31
---
<!-- more -->

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
