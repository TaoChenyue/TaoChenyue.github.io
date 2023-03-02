---
title: Label Studio
icon: fa6-solid:l
order: 1
---
## 拉取
```bash
docker pull heartexlabs/label-studio:latest
```
## 使用本地文件
```bash
docker run -it -p 8080:8080 -v $(pwd)/mydata:/label-studio/data \
--env LABEL_STUDIO_LOCAL_FILES_SERVING_ENABLED=true \ 
--env LABEL_STUDIO_LOCAL_FILES_DOCUMENT_ROOT=/label-studio/files \ 
-v $(pwd)/myfiles:/label-studio/files \
heartexlabs/label-studio:latest label-studio
```

::: note
局域网内其他主机连不上端口的话，可以在防火墙的入站规则里设置允许。
:::