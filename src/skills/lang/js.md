---
title: JavaScript
icon: simple-icons:nodedotjs
order: 300
---
> [JavaScript](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript) 是一种脚本语言，可以用来创建动态更新的内容，控制多媒体，制作图像动画，还有很多。(好吧，虽然它不是万能的，但可以通过简短的代码来实现神奇的功能。）

::: tip
应用程序接口(Application Programming Interfaces(API))
+ Browser APIs: 文档对象、地理位置、画图、影音、
+ 3rd APIs
:::
[[toc]]
## JS使用
+ HTML内部使用
```html
<script>
</script>
```
+ HTML外部使用
```html
<script src="xx.js" async></script>
```
::: normal-demo Demo
```html
<button id="button">Click</button>
```
```js

const button = document.querySelector('#button');
button.addEventListener('click', ()=> {
    alert("你点击了这个按钮！");
});
```
:::

#### 执行方式
+ async: 异步执行，不影响html的加载
+ defer：顺序执行，按照在html中的顺序加载

#### 注释
+ 单行注释：```//```
+ 多行注释：```/* */```

## 语言点
::: tip
养成代码分号结尾的习惯
:::
### 变量/常量
+ const：初始化的时候要求初始值，之后不能通过赋值修改值。
+ let：变量只能声明一次
+ var：可以多次声明一个变量(不推荐)
::: tip 
推荐多用let,不用var。
:::
#### 变量类型
::: tip 查看类型
```js
typeof yourObject
```
:::
+ Number
  + 二进制
  + 八进制
  + 十进制
    + 整数(c++:int)
    + 浮点数(c++:float)
    + 双精度(c++:double)
  + 十六进制
```js
let a=12;
```
+ String
```js
// 单引号双引号都可以
let a="I\'ve done the 'Job'. "+"OK? ";
let b=12;
//数字转字符串
let c=b.toString();
//字符串转数字
let d=Number(c);
//字符串长度
a.length;
//字符串索引
a[0];
//字符串查找
a.indexof('done');
//字符串切片
a.slice(0,2);
//字符串替换
a.replace('done','got');
//大小写转换
a.toLowerCase().toUpperCase();
```
+ Boolean
```js
let a=true;
```
+ Array

```js
let a=['1','2','3'];
a[1]='0';
//数组转字符串
let b=a.join(',');
//字符串分割为数组
b.split(',');
a.push('4');
a.pop()
a.shift();
a.unshift('1');
```
+ Object

```js
let a={name:"a"};
a.name
```
    + class
```js
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }
}
class Student extends Person {
    #year;
    constructor(name, year) {
        super(name);
        this.#year = year;
    }
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
    canStudyArchery() {
        return this.#year > 1;
    }
    somePublicMethod() {
        this.#somePrivateMethod();
    }
    #somePrivateMethod() {
        console.log('You called me?');
    }
}

let a= new Student('a');
a.introduceSelf();
a.somePublicMethod();
```
### 函数
```js
function funtion_name(args){
    return obj;
}
function(args){
    return obj;
}


```
### 运算符
1. 算术运算符(```+```,```-```,```*```,```/```,```%```,```**```)
2. 比较运算符(```===```,```!==```,```<```,```>```,```<=```,```>=```)
3. 逻辑运算符(```&&```,```||```,```!```)
4. 自增、自减(```++```,```--```)
5. 赋值(```=```)
### 条件语句
```js
if (condition){
    // do something
}else if {
    // do else
}else{
    // otherwise do something
}

switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    actually, just run this code
}

( condition ) ? run this code : run this code instead

```
### 事件
```js
object.addEventListener(event-name,event-handler);
object.removeEventListener(event-name,event-handler);
event.preventDefault();
event.stopPropagation()
```
### 循环
```js
// 都支持 continue 和 break
for (initializer; exit-condition; final-expression) {
  // code to run
}

initializer
while (exit-condition) {
  // code to run

  final-expression
}

initializer
do {
  // code to run

  final-expression
} while (exit-condition)

```
### 异步执行
1. Promise
```js
Promise()
.all([promise1,promise2])
.then(
    // do sometheing
).then(
    // do something
).catch(
    // catch some error
)
```
2. async/await
```js
async function(){
    // will be execute async
}
await function(){
    // will be stuck until finish
}
```