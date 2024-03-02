---
title: 用Conda搭建Python开发环境
icon: vscode-icons:file-type-python
cover: https://resource.taochenyue.zone/api/random_image.php?type=horizontal&seed=20240224170740
date: 2023-10-31
---
Python由荷兰国家数学与计算机科学研究中心的吉多·范罗苏姆于1990年代初设计，提供了高效的高级数据结构，还能简单有效地面向对象编程，已被逐渐广泛应用于系统管理任务的处理和Web编程。
<!-- more -->
## Conda
### 常用命令
```bash
# version
conda --version
# update 
conda update conda
# config
conda config --show
# mirrors
conda config --add channels your-url
# show channels
conda config --set show_channel_urls yes
# clean useless cache (packages,tar)
conda clean -p
conda clean -t
# clean all
conda clean --all -y
```
### 环境管理
```bash
# show environments
conda env list
conda info -e 
conda info --envs
# create environment
conda create -n env-name python=py-version
# activate environment
conda activate env-name
# deactivate
conda deactivate
# export and import environment
conda env export --name env_name > env.yml
conda env create -f env.yml
```
### Python版本管理
```bash
# exact version
conda install python=py-version
# latest version
conda update python
```
### Conda包管理
```bash
# see all packages
conda list
# search package
conda search package
# install package (with exact channel)
conda install package -c channel_url
# update package
conda update package
# uninstall package will uninstall dependencies too 
#--force command is not recommend, won't uninstall dependencies
conda uninstall package (--force)
# remove some packages
conda remove --name env_name package_name
# remove all packages and environment
conda remove --name env_name --all (-y)
```
### 遇到的特殊情况
conda包管理和pip包管理并不相同，在导出的env.yml中会列出pip中含有的包。
pip使用的--extra-index-url 并不会在env.yml中体现，需要手动添加。
eg:
```yml
name: xx
channels:
  - defaults
dependencies:
  - ....
  - pip:
      - --extra-index-url https://download.pytorch.org/whl/cu117
      - torch==1.13.1+cu117
      - torchaudio==0.13.1+cu117
      - torchvision==0.14.1+cu117
      - ...
```
## 参考
+ [AnaConda](https://repo.anaconda.com/archive/)
+ [MiniConda](https://repo.anaconda.com/miniconda/)