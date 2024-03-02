---
title: Vim中的替换
icon: devicon-plain:vim
cover: https://resource.taochenyue.zone/api/random_image.php?type=horizontal&seed=20240224170725
date: 2023-10-31
---
<!-- more -->
```:[range]s/{pattern}/{string}/[flags] [count]```

+ range: 第几行到第几行，如```1,5```；```%```表示整个文件；```.```表示当前行；```$```表示文件最后一行
+ pattern: 正则表达式
+ string: 要替换的字符串，空字符串就是删除
+ flags
  + ```c``` ->confirm 每次替换要确认
  + ```g``` ->global 替换搜索到的全部内容
  + ```i``` ->ignore 忽略大小写

example:```:%s/good/Good/g```


