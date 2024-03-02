---
title: 分类任务的常见衡量指标
icon: circum:edit
cover: https://resource.taochenyue.zone/api/random_image.php?type=horizontal&seed=20240224170745
date: 2023-11-07
---

根据样本的不同，分类任务可以分为三种类型的任务:binary二类别分类,multiclass多类别分类,multilabel多标签分类
<!-- more -->
binary的样本和预测通常如下形式
```python
target = tensor([0,1,0,1,0,1])
preds  = tensor([0.5,0.2,0.1,0.1,0.8,0.9])
```
multiclass的样本和预测通常如下形式
```python
target = tensor([0, 1, 3, 2])
preds  = tensor([[0.75, 0.05, 0.05, 0.05, 0.05],
				[0.05, 0.75, 0.05, 0.05, 0.05],
				[0.05, 0.05, 0.75, 0.05, 0.05],
				[0.05, 0.05, 0.05, 0.75, 0.05]])
```
multilabel的样本和预测通常如下形式
```python
target = tensor([[1, 0, 1],
                 [0, 0, 0],
                 [0, 1, 1],
                 [1, 1, 1]])
preds  = tensor([[0.75, 0.05, 0.35],
                [0.45, 0.75, 0.05],
                [0.05, 0.55, 0.75],
                [0.05, 0.65, 0.05]])
```
## 混淆矩阵
可以看出预测是以概率的形式表现的。对于二分类，假设有一个概率p，大于p的是预测为真，小于p的是预测为假。就可以得到下面这张表。
|        |     | 预测                              | 预测                     | 统计量                                                                                             |
| ------ | --- | --------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------- |
|        |     | 1                                 | 0                        |                                                                                                    |
| 样本   | 1   | ```TP```*True Positive*           | ```FN```*False Negative* | ```TP/(TP+FN)```*召回率Recall,灵敏度Sensitivity,TPR*                                               |
| 样本   | 0   | ```FP```*False Positive*          | ```TN```*True Negative*  | ```TN/(FP+TN)```*特异度Specificity*<br>```FP/(FP+TN)```*FPR*                                       |
| 统计量 |     | ```TP/(TP+FP)```*精确率Precision* |                          | ```(TP+TN)/(TP+FP+TN+FN)```*正确率Accuracy*<br>```F1Score=2*Precision*Recall/(Precision+Recall)``` |

## ROC曲线(Reciever Operating Characterastic Curve)
通过改变概率p，可以得到不同的混淆矩阵，自然就可以得到不同的TPR和FPR。
以FPR为横轴，TPR为纵轴，(FPR,TPR)为坐标点,可以画出ROC曲线。
### AUC(Area Under Curve)
ROC曲线下的面积。如果没有交点，AUC越大越好；如果有交点,要根据纵轴也就是灵敏度的需求，来判断好坏。