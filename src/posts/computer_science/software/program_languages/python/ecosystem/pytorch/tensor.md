---
title: PyTorch的Tensor张量
icon: logos:pytorch
cover: https://resource.taochenyue.zone/api/random_image.php?type=horizontal&seed=20240224170747
date: 2023-11-02
---

张量在数学上的表示就是多维数组。在PyTorch中，张量还有关于神经网络和计算设备的其它属性。
<!-- more -->
## 常用的tensor创建方法
```python
# 创建未初始化的张量
torch.empty(
	*size: _int,
    memory_format: memory_format | None = None,
    out: Tensor | None = None,
    dtype: _dtype | None = None,
    layout: _layout | None = None,
    device: _device | str | None = None,
    pin_memory: _bool | None = False,
    requires_grad: _bool | None = False
)
# 统一初始化为一个值
torch.zeros(
	*size: _int,
    out: Tensor | None = None,
    dtype: _dtype | None = None,
    layout: _layout | None = None,
    device: _device | str | None = None,
    pin_memory: _bool | None = False,
    requires_grad: _bool | None = False
)
torch.zeros_like(
	input: Tensor,
    *,
    memory_format: memory_format | None = None,
    dtype: _dtype | None = None,
    layout: _layout | None = None,
    device: _device | str | None = None,
    pin_memory: _bool | None = False,
    requires_grad: _bool | None = False
)
torch.ones(
	*size: _int,
    out: Tensor | None = None,
    dtype: _dtype | None = None,
    layout: _layout | None = None,
    device: _device | str | None = None,
    pin_memory: _bool | None = False,
    requires_grad: _bool | None = False
)
torch.ones_like(
	input: Tensor,
    *,
    memory_format: memory_format | None = None,
    dtype: _dtype | None = None,
    layout: _layout | None = None,
    device: _device | str | None = None,
    pin_memory: _bool | None = False,
    requires_grad: _bool | None = False
)
torch.full(
	size: _size,
    fill_value: Number,
    *,
    out: Tensor | None = None,
    layout: _layout = strided,
    dtype: _dtype | None = None,
    device: Device = None,
    requires_grad: _bool = False
)
torch.full_like(
	input: Tensor,
    fill_value: Number,
    *,
    memory_format: memory_format | None = None,
    dtype: _dtype | None = None,
    layout: _layout | None = None,
    device: _device | str | None = None,
    pin_memory: _bool | None = False,
    requires_grad: _bool | None = False
)
# 按照随机分布初始化值
## 正态分布
torch.normal( 
	mean: _float,
    std: _float,
    size: Sequence[_int | SymInt],
    *,
    generator: Generator | None = None,
    out: Tensor | None = None,
    dtype: _dtype | None = None,
    layout: _layout | None = None,
    device: _device | str | None = None,
    pin_memory: _bool | None = False,
    requires_grad: _bool | None = False
)
## 均匀分布
torch.randn(
	*size: _int,
    out: Tensor | None = None,
    dtype: _dtype | None = None,
    layout: _layout | None = None,
    device: _device | str | None = None,
    pin_memory: _bool | None = False,
    requires_grad: _bool | None = False
)
torch.randn_like(
	input: Tensor,
    *,
    memory_format: memory_format | None = None,
    dtype: _dtype | None = None,
    layout: _layout | None = None,
    device: _device | str | None = None,
    pin_memory: _bool | None = False,
    requires_grad: _bool | None = False
)
## 伯努利分布
torch.bernoulli(
	input: Tensor,
    p: _float,
    *,
    generator: Generator | None = None	
)
# 根据输入数组创建张量
torch.tensor(
	data: Any, # list 或者 numpy数组
    dtype: _dtype | None = None,
    device: Device = None,
    requires_grad: _bool = False
)
# 由numpy直接创建(共享内存)
torch.from_numpy(
	ndarray: Any
)
# 特殊的一维张量
## 差值一定的等差数列
torch.arange(
	start: Number,
    end: Number,
    step: Number,
    *,
    out: Tensor | None = None,
    dtype: _dtype | None = None,
    device: Device = None,
    requires_grad: _bool = False
)
# 头尾一定的等差数列
torch.linspace(
	start: Number,
    end: Number,
    steps: _int | None = None,
    *,
    out: Tensor | None = None,
    dtype: _dtype | None = None,
    device: Device = None,
    requires_grad: _bool = False
)
# 等比数列，base的start次幂 到 end次幂
torch.logspace(
	start: Number,
    end: Number,
    steps: _int | None = None,
    base: _float = 10,
    *,
    out: Tensor | None = None,
    dtype: _dtype | None = None,
    device: Device = None,
    requires_grad: _bool = False
)
# 1到n的乱序排列
torch.rand_perm(
	n: _int,
    *,
    generator: Generator | None,
    out: Tensor | None = None,
    dtype: _dtype | None = None,
    layout: _layout | None = None,
    device: _device | str | None = None,
    pin_memory: _bool | None = False,
    requires_grad: _bool | None = False
)
# 特殊的二维矩阵
## 单位对角矩阵
torch.eye(
	n: _int,
    *,
    out: Tensor | None = None,
    dtype: _dtype | None = None,
    layout: _layout | None = None,
    device: _device | str | None = None,
    pin_memory: _bool | None = False,
    requires_grad: _bool | None = False
)
```
## 共同点
+ size 			元组指代tensor的形状
+ memory_format 决定数组在磁盘中的存储格式是NCHW或NHWC
+ out 			指向的tensor和创建的tensor共享内存地址
+ dtype 		可以控制tensor的精度，分整型、小数型、布尔型
+ layout 		控制tensor稠密还是稀疏
+ device 		指定tensor的存储设备是cpu还是gpu
+ pin_memory	如果为True就不会和硬盘交换数据，放到gpu的速度会快
+ requires_grad 要不要求导
+ generator  	随机数生成迭代器，可以按照seed种子生成伪随机数
+ xx_like()		创建的tensor和传入的tensor在形状上保持一致
+ 
## tensor转化为其他python对象
```python
# tensor -> numpy
tensor.numpy()
# tensor -> python object
tensor.item()
object_class(tensor)
```

## 改变tensor形状
```python
# 查看tensor形状
torch.shape
torch.size()
# 按照新形状填充数据
torch.tensor(data).view(*size: _int)
torch.tensor(data).reshape(*size: _int)
# 交换两个维度
torch.tensor(data).transpose(
	dim0: _int,
    dim1: _int
)
# 实现到新维度序列的映射
torch.tensor(data).permute(*dims: _int)
# 存储地址是否连续
torch.tensor(data).is_contiguous(memory_format: memory_format = torch.contiguous_format)
# 使存储地址连续
torch.tensor(data).contiguous(memory_format: memory_format = torch.contiguous_format)
# 切片: 与python切片类似，直接操作tensor中某一部分的数据
x[1:-2,0:3] 
```
::: note
view 只能对存储地址连续的张量操作;reshape 没有这个限制。
:::

## tensor的运算
```python
# 加减乘除幂
+ - * / **
torch.add()
torch.sub() 
torch.mul(),torch.dot() 
torch.div()
torch.pow()
# 近似运算
torch.ceil()        # 向上取整
torch.floor()       # 向下取整
torch.trunc()       # 取整数
torch.frac()        # 取小数
torch.round()       # 四舍五入
# 阈值处理：将数据限定在阈值范围内
torch.clamp(tensor,min_v,max_v)
# 逻辑运算
== > >= < <= !=
# 位运算
torch.bitwise_and()
torch.bitwise_or()
torch.bitwise_not()
torch.bitwise_left_shift()
torch.bitwise_right_shift()
# 统计运算
torch.min(dim:tuple,keep_dim:bool) # dim选择几个维度，keep_dim控制结果的维度数量改不改变
torch.max()
torch.sum()
torch.numel()
# 矩阵运算
## 矩阵乘法
@ 
torch.mv()      # 向量@矩阵
torch.mm()      # 矩阵@矩阵
torch.matmul()  # 张量@张量
## 矩阵范数:所有元素平方和的平方根
torch.norm()
# 数学运算(非常多)
torch.abs()         # 取绝对值
torch.neg()         # 取相反数
torch.reciprocal()  # 倒数
torch.sqrt()        # 开方
torch.cos(),torch.sin() # 三角函数
torch.log(),torch.exp() # 对指数运算
```
::: tip 广播机制
上述运算除了矩阵乘法都是按元素位置运算。
如果两个元素的形状不同，pytorch会从最低维度开始复制补齐形状，然后进行运算。
:::

## tensor求导
1. 只有由tensor计算得到的标量才能反向求导(backward)
2. requires_grad属性控制tensor是否参与求导
```python
a = torch.tensor([1,2])
(a**2).sum().backward()
print(a.grad)
```
### 
tensor.data 和 tensor.detach()的异同点
1. tensor.data是属性，tensor.detach() 是方法
2. 二者都是将变量从原来的求导链中取出来，requires_grad = False
3. 得到的数据依然和原数据绑定
4. 修改.data得到的数据后，访问原求导链的梯度不会报错(不符合逻辑)
5. 修改.detach()得到的数据后，访问原求导链的梯度会报错，提示求导数据被修改(符合逻辑)

## 参考
+ [Numpy](https://numpy.org/)
+ [Scipy](https://scipy.org/)
+ [Scikit-image](https://scikit-image.org/)
+ [动手学深度学习](http://zh-v2.d2l.ai/)
+ [PyTorch官网tutorials](https://pytorch.org/tutorials/)
+ [TorchServe](https://github.com/pytorch/serve)
