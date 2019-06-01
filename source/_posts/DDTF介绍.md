---
title: "每日论文: Data-driven tight frame construction and image denoising"
categories:
  - 读书笔记
tags:
  - Denoising
  - Dictionary learning
  - Sparsity
  - Inverse problem
date: 2019-05-31
---

我们知道，找到图像的稀疏表示可以在图像去噪、重建等方面有重大作用。常用的方法是字典学习，其中最广为人知的就是K-SVD方法。
但是，K-SVD方法的缺点主要在于其计算量大。DDTF的优点就在于计算量较小。

## DDTF 模型和算法介绍
DDTF考虑如下的一个优化问题：

$$
\begin{equation}
\begin{aligned}
 \min_{v,W}& ||v-Wg||_2^2+\lambda^2||v||_0\\
s.t.& \quad W^T W=I
\end{aligned}
\end{equation}
$$

其中g是图像，g是编码，W是字典。求解方法就是轮流最小化v和W。

1. 给定$$W^{(k)}$$，求解$$v^{(k)}$$.

$$
\begin{equation}
v^{(k)}:=argmin_v||v-W^{(k)}g||_2^2+\lambda^2||v||_0
\end{equation}
\label{iterA}
$$

2. 给定$$v^{(k)}$$，求解$$W^{(k+1)}$$.

$$
\begin{equation}
W^{(k+1)}:=argmin_W||v^{(k)}-Wg||_2^2
\end{equation}
\label{iterB}
$$

对于式子\ref{iterA}，存在唯一的最优解$$ {\bar v}=T_{\lambda}(Wg)$$, 对于式子\ref{iterB}，可以通过SVD算法精确求解：


$$
\begin{equation}
\begin{aligned}
 ||v-Wg||_2^2=\sum_{n-1}^N||v\

\end{aligned}
\end{equation}
$$


参考文献：

[Data-driven tight frame construction and image denoising](https://doi.org/10.1016/j.acha.2013.10.001)