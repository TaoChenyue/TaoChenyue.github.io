---
title: SQL常用语句
icon: tabler:sql
cover: https://resource.taochenyue.zone/api/random_image.php?type=horizontal&seed=20240224170751
date: 2023-10-31
---
<!-- more -->
```sql
-- 选择
select 
from 
-- 别名
as
-- 加减乘除 取平均值 连接文本
where
> < != ==
is null
is not null
-- 模糊查询
like
-- 任意长度字符串
"%"
-- 单个字符
"_"
-- 逻辑运算
and 
or
not
-- 去重
distinct
-- 排序
order by
-- 升序
asc
-- 降序
desc
-- 截断
limit 
-- 条件分支
case when ... then ... when ... then ... else ... end 
-- 时间函数
date() time() datetime()
-- 字符串处理
upper() lower() length()
-- 列汇总计算
count() sum() avg() min() max()
-- 分组
group by 
-- 过滤
having
-- 多表组合
cross join
-- INNER JOIN
join ... on ..
-- OUTTER JOIN
(left/right) join ... on ..
-- 子查询 即select的结果作为另一个select的输入
exists
not exists
-- 结果合并
union
union all
-- 开窗函数
over(partition by ...)
-- 累计开窗函数
over(partition by ... order by ...)
-- 排名开窗函数
rank()
-- 连续排名开窗函数
row_number()
-- 前后行数据开窗函数
lag(column_name,offset,default_value)
lead(column_name,offset,default_value)
```

## 参考
+ [MySQL](https://dev.mysql.com/downloads/)
+ [鱼皮SQL闯关](http://sqlmother.yupi.icu)