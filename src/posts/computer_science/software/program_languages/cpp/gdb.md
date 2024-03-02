---
title: GDB调试常用命令
icon: circum:edit
cover: https://resource.taochenyue.zone/api/random_image.php?type=horizontal&seed=20240224170734
date: 2023-10-31
---
<!-- more -->
```
list # l

run # r
start # run and wait in first line
continue # c

next # n
step # s, if meet function then enter function and wait


break # b

break FunctionName
break LineNo
break FileName:LineNo
break FileName:FunctionName
break -/+offset
break ... if condition

info break # show all break point information
disable <break-number>
enable <break-number>
delete <break-number>

print # p
display 
```