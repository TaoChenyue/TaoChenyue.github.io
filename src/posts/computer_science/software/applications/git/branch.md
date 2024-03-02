---
title: Git代码改到一半发现分支不对
icon: mdi:git
cover: https://resource.taochenyue.zone/api/random_image.php?type=horizontal&seed=20240224170717
date: 2023-10-31
---
<!-- more -->
```sh
git add .
git diff
git stash
git checkout new-branch
git stash list
git stash apply stash@{0}
git stash pop
git stash clear
```