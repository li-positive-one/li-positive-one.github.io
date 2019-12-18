---
title: "每日文章-Deep Learning for Seeing Through Window With Raindrops"
categories:
  - 读书笔记
tags:
  - Computer Vision
  - Derain
date: 2019-12-18
mathjax: true
---

Quan, Yuhui, Shijie Deng, Yixin Chen, and Hui Ji. "Deep Learning for Seeing Through Window With Raindrops." In Proceedings of the IEEE International Conference on Computer Vision, pp. 2463-2471. 2019.

[[pdf](http://openaccess.thecvf.com/content_ICCV_2019/papers/Quan_Deep_Learning_for_Seeing_Through_Window_With_Raindrops_ICCV_2019_paper.pdf )]

## 摘要

雨天透过玻璃窗拍照，画面会被玻璃窗上的雨滴破坏。本文用一个神经网络来解决这个问题。





## 引言

简单的雨滴模型，
$$
I=(1-A)\odot L+A \odot R
$$
其中$\odot$表示element-wise乘法，$I$ 表示观测到的图片，$L$ 表示玻璃后的真实场景，$R$ 表示雨滴层，$A$ 是透明度矩阵。

### 相关工作

