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
    number = models.IntegerField(null=True)
# 在settings.py 中的INSTALL_APPS 中添加 'temp'
# 移植以后，数据库就会认得这个Test表
python manage.py makemigrations temp
python manage.py migrate temp
# 增: 实例化一个Test对象，修改属性后，save即可,或者使用create方法
a=Test()
a.name="a"
a.save()
b=Test.objects.create(name="b",number=2)
# 查：all,filter,exclude，get,order_by..
objs=Test.objects.all()
objs=Test.objects.filter(name="a") # 返回符合条件的列表
objs=Test.objects.exclude(name="a") # 返回不符合条件的列表
obj=Test.objects.get(name="a") # 返回个体，找不到会报错
objs=Test.objects.order_by("name") # 排序后返回结果
objs=Test.objects.reverse() # 反转查询结果
nums=Test.objects.count() # 返回对象个数
obj=Test.objects.first() # 第一个对象
obj=Test.objects.last() # 倒数第一个对象
yes_no=Test.objects.exists() # 判断是否存在数据
objs_dict=Test.objects.values() # 返回一个字典，可以指定查询字段
objs_tuple=Test.objects.values_list("name") # 返回一个元组列表，可以指定查询字段
objs_only=Test.objects.values_list("name").distinct() # 对返回结果去重
# 关键字的双下划线模糊查询
Test.objects.filter(name__in=['a','z']) # __in 查询区间
Test.objects.filter(name__range=['a','z']) # __range 类似
Test.objects.filter(name__gt='a') # __gt 大于 __gte 大于等于
Test.objects.filter(name__lt='a') # __lt 大于 __lte 大于等于
Test.objects.filter(name__contains='a') # __contains 字符串包含 __icontains 不区分大小写
Test.objects.filter(name__startswith='a') # __startswith 以字符串开头 __endswith
# 针对DateField类型, __year, __month, __day 分别查询年月日

# 删：获取Test对象后(可以是对象列表)，delete即可
Test.objects.filter(name__in=['a','z']).delete()
obj.delete()
# 改：获取Test对象后(或者对象列表)，修改属性后save
Test.objects.filter(name__in=['a','z']).update(name="b")
obj.name="b"
obj.save()
```
### 对象关系映射(Object Relational Mapping, ORM)
```python
# 一对一
models.OneToOneField("model-name", on_delete=models.CASCADE)
# 一对多
models.ForeignKey("model-name", on_delete=models.CASCADE)
# 多对多
models.ManyToManyField(to="model-name")
```
比如，一门课程有多个学生，一个学生可以选修多门课程，那么学生和课程就是多对多关系。
```python
class Course:
    name = models.CharField()
class Student:
    name = models.CharField()
    course = models.ManyToManyField(to="Course")
```
1. 正向查询: ```student.course.name```
2. 反向查询: ```course.student__set.name```


## Django Rest Framework
### 