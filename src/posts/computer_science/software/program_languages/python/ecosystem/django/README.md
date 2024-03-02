---
title: Django及DRF简单小结
icon: akar-icons:django-fill
cover: https://resource.taochenyue.zone/api/random_image.php?type=horizontal&seed=20240224170744
date: 2023-10-31
---

Django 是由 Python 编写的一个开放源代码的 Web 应用框架。
<!-- more -->
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
::: tip
删除一个app：确保没有其他app 引用该app
```sh
python manage.py migrate app-name zero
```
然后删除相关引用，INSTALL_APPS.
:::
views.py 中的每个函数的输入都是 django.http.HttpRequest对象，包含name,head,body,method等方法。

Methods:
+ GET 不给数据直接看
+ POST 给数据完看返回值
+ DELETE 删除一个对象
+ PUSH 更新一个对象，需要对象的全部信息
+ PATCH 更新一个对象，需要对象的部分信息




## Django Rest Framework
[官网](https://www.django-rest-framework.org/)
```sh
pip install djangorestframework
```
### Model
#### Serializers
+ 序列化:对象转(JSON)数据
+ 反序列化:对(JSON)数据校验并转换成对象
1. Serializer
```python
# models.py
from django.db import models
# Create your models here.
class MyModel(models.Model):
    class Meta:
        db_table="mymodel"
        
    age=models.IntegerField(
        verbose_name="年龄",
        default=20,
        help_text="age of user"
    )
    name=models.CharField(
        verbose_name="名称",
        max_length=20,
        null=True
    )
    join_date=models.DateField(
        verbose_name="日期",
        auto_created=True
    )
# serializers.py
from .models import MyModel
from rest_framework import serializers
class MySerializers(serializers.Serializer):
    age=serializers.IntegerField()
    name=serializers.CharField(max_length=20)
    # 如果设置不同名称，需要添加source
    date=serializers.DateField(source="join_date")
# views.py
from rest_framework.views import APIView,Response
from .models import MyModel
from .serializers import MySerializers
# Create your views here.
class MyView(APIView):
    def get(self,request):
        objs=MyModel.objects.all()
        # 序列化
        serializer=MySerializers(instance=objs,many=True)
        return Response(serializer.data)
    def post(self,request):
        # 反序列化
        serializer=MySerializers(data=request.data)
        # 数据校验
        if serializer.is_valid():
            newObj=MyModel.objects.create(**serializer.data)
            return Response(MySerializers(newObj).data)
        else:
            return Response(serializer.errors)
```
+ serializer.data 返回有序字典，挑选的内容在Serializer中定义
+ rest_framework.Response 对字典数据进行封装

2. ModelSerializer

对Serializer的封装
```python
class MySerializers(serializers.ModelSerializer):
    date = serializers.DateField(source="join_date",required=False)
    class Meta:
        model = MyModel
        fields = ["age","name","date"]
```
### View
#### FBV(Function Based View)
 路由指向函数,以上的内容都是。
#### CBV(Class Based View)
路由指向类,是DRF实现的基础
1. View
    ``` python
    # views.py
    from django.views import View
    class MyView(View):
        def get(self,request):
            return HttpResponse("GET")
        def post(self,request):
            return HttpResponse("POST")
        def delete(self,request):
            return HttpResponse("DELETE")
    # urls.py
    path("my/",MyView.as_view())
    ```
    ::: tip 解决CSRF错误 
    使用rest_framework的APIView及其子类无需注释
    ``` python
    # settings.py注释这一行
    # "django.middleware.csrf.CsrfViewMiddleware",
    ```
    :::
    View.as_view()中的dispatch()实现了不同的请求方式分发到不同的函数。
    ```mermaid
    graph LR;
    request.GET-->dispatch-->MyView.get
    request.POST-->dispatch-->MyView.post
    request.DELETE-->dispatch-->MyView.delete
    ```

2. APIView(View的子类)
    APIView.as_view() 对View.as_view()进行了完善，比如跨域处理、对request对象进行功能增强、增加了认证、权限、限流功能。
    可以直接通过```request.data```获取各种请求方式的解析数据。
3. GenericAPIView(APIView的子类)
    将查询对象和序列化器提取出来
    + queryset
    + serializer
4. rest_framework.mixins(需要和GenericAPIView结合使用)
    + ListModelMixin: 查全部->list()
    + CreateModelMixin: 创建一个->create()
    + RetrieveModelMixin: 查个体->retrieve()
    + UpdateModelMixin: 改个体->update()
    + DestroyModelMixin: 删个体->destroy()
5. rest_framework.generic
    + ListCreateAPIView = ListModelMixin+CreateModelMixin+GenericAPIView
    + RetriveUpdateDestroyAPIView = RetrieveModelMixin+UpdateModelMixin+DestroyModelMixin+GenericAPIView
    + 同理，可以自由选择
6. ViewSet(ViewSetMixin, views.APIView):
    在ViewSetMixin.as_view()中实现了由字典完成请求方式的分发
    ```python
    as_view({
        "get":"get_fun_name",
        "post":"post_fun_name"
    })
7. GenericViewSet(ViewSetMixin, views.GenericAPIView)
8. ModelViewSet(CreateModelMixin,RetrieveModelMixin,UpdateModelMixin,DestroyModelMixin,ListModelMixin,GenericViewSet)

### 路由
```python
# urls.py
from rest_framework import routers
from demo.views import MyView
router=routers.DefaultRouter()
# basename 默认是queryset的模型的小写名称，影响反向路由解析
router.register("my",MyView,basename="my")
```

### 认证
```python
class MyAuth:
    def authenticate(self,request):
        return None
        # return (request.user,None)
class MyView(ModelViewSet):
    queryset=MyModel.objects.all()
    serializer_class = MySerializers
    authentication_classes = [MyAuth,]
```

### 权限
```python
from rest_framework.permissions import BasePermission
class MyPermit(BasePermission):
    def has_permission(self, request, view):
        return True
    def has_object_permission(self, request, view, obj):
        return False
class MyView(ModelViewSet):
    queryset=MyModel.objects.all()
    serializer_class = MySerializers
    permission_classes = [MyPermit,]
```

## 搜索、过滤、分页、排序、限流
参考：
1. [搜索、过滤、分页、排序](https://blog.csdn.net/t_i_a_n_/article/details/99625478)
2. [过滤](https://zhuanlan.zhihu.com/p/110060840)
3. [限流](https://blog.csdn.net/li944254211/article/details/109491804)
```python
REST_FRAMEWORK = {
    # 认证
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework.authentication.BasicAuthentication",
        "rest_framework.authentication.SessionAuthentication",
    ),
    # 权限
    "DEFAULT_PERMISSION_CLASSES": ("rest_framework.permissions.IsAuthenticated",),
    # 过滤
    "DEFAULT_FILTER_BACKENDS": (
        'django_filters.rest_framework.DjangoFilterBackend',
        "rest_framework.filters.SearchFilter",
        "rest_framework.filters.OrderingFilter",
    ),
    # 分页
    "DEFAULT_PAGINATION_CLASS": "user.pagination.DefaultPagination",
}
```
需要注意的是过滤的关键词是 ```filterset_fields``` 而不是 ```filter_fields```

## 接口文档
[参考](https://cloud.tencent.com/developer/article/1812525)
```python
# pip install coreapi
# settings.py
REST_FRAMEWORK = {
    # 文档
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.AutoSchema',
}
# urls.py
from rest_framework.documentation import include_docs_urls
urlpatterns = [
    path('docs/',include_docs_urls(title="API接口文档")),
]
```

## 其他三方工具
+ [django-cleanup](https://github.com/un1t/django-cleanup)