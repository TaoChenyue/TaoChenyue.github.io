---
title: Django
icon: tabler:brand-django
order: 1
---
> [Django 是一个由 Python 编写的一个开放源代码的 Web 应用框架。](https://www.runoob.com/django/django-intro.html)

## 快速启动一个Demo
```sh
# 安装
pip install django
# 创建项目，比如backend
django-admin startproject backend
cd backend
# settings.py 管理模板、权限、时区、应用等
# urls.py 管理路由
# 移植数据库
python manage.py migrate
# 启动服务
python manage.py runserver 8081
```
## 创建一个view
```sh
# 创建一个项目，比如temp
django-admin startproject temp
```
```python
# 在views.py创建一个处理函数
from django.http import JsonResponse
def hello(request):
    return JsonResponse(data={
        "msg":"Hello world"
    })
# 在temp下创建urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('hello/',views.hello),
]
# 在backend下的urls.py包含路径
path('temp/',include('temp.urls'))
# 再次启动服务即可在 temp/hello/ 看到信息
```
views.py 中的每个函数的输入都是 django.http.HttpRequest对象，包含name,head,body,method等方法。

Methods:
    + GET 不给数据直接看
    + POST 给数据完看返回值
    + DELETE 删除一个对象
    + PUSH 更新一个对象，需要对象的全部信息
    + PATCH 更新一个对象，需要对象的部分信息

## 创建一个model
```python
# 在models.py 中添加
from django.db import models
class Test(models.Model):
    name = models.CharField(max_length=20)
# 在settings.py 中的INSTALL_APPS 中添加 'temp'
# 移植以后，数据库就会认得这个Test表
python manage.py makemigrations temp
python manage.py migrate temp
# 增: 实例化一个Test对象，修改属性后，save即可
a=Test()
a.name="a"
a.save()
# 查：filter，get
obj=Test.objects.filter(name="a") # 返回列表
obj=Test.objects.get(name="a") # 返回个体，找不到会报错
# 删：获取Test对象后，delete即可
obj.delete()
# 改：获取Test对象后，修改属性后save
obj.name="b"
obj.save()
### 

## Django Rest Framework
### 