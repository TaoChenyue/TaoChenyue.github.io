---
title: 修饰符
---

本质是对函数的封装，还是Callable。

## 函数修饰符
修饰函数或类中的方法，对于类中方法来说，修饰符在类内和类外不影响。
### 修饰符无参数
      1. 被修饰无参数

        ```python
        def decorator(func):
            def wraper():
                print("before")
                func()
            return wraper

        @decorator
        def func():
            print("a")
            
        func()
        ```
        可以看出还是函数的函数，修饰符的参数为函数名func，用另一个函数wrapper对func进行封装，返回封装的函数wraper。实际上运行的是wraper(). 所以其实没有固定格式。写外边也行。

        ```python
        from typing import *
        def outside_wraper(func:Callable[[],None]):
            print("before")
            return func
            
        def decorator(func):
            return outside_wraper(func)

        @decorator
        def func():
            print("a")
            
        func()
        ```

      2. 被修饰有参数

        ```python
        from typing import *
            
        def decorator(func):
            def wraper(*args,**kwargs):
                print("before")
                func(*args,**kwargs)
            return wraper

        @decorator
        def func(a):
            print(a)
            
        func(1)
        ```

   2. 修饰符有参数(不过是外套一层分析参数的函数)
    ```python
    from typing import *
        
    def decorator(text):
        def parse(func):
            def wraper(*args,**kwargs):
                print("before")
                func(*args,**kwargs)
                print(text)
            return wraper
        return parse

    @decorator("after")
    def func(a):
        print(a)
        
    func(1)
    ```
## 类修饰符

把 __init__ 理解为最外层就好
```python
from typing import *
class Decorator:
    def __init__(self,mode) -> None:
        self.mode=mode
    def __call__(self, func) -> Any:
        print(func)
        def wrap(*args: Any, **kwds: Any):
            print(*args,**kwds)
            print("before")
            ret=func(*args,**kwds)
            print(self.mode)
            return ret
        return wrap
    
    
@Decorator("after")
def test(x):
    print(x)
    
test(1)
```