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
mathjax: true
---

我们知道，找到图像的稀疏表示可以在图像去噪、重建等方面有重大作用。常用的方法是字典学习，其中最广为人知的就是K-SVD方法。
但是，K-SVD方法的缺点主要在于其计算量大。DDTF的优点就在于计算量较小。DDTF模型来自[Data-driven tight frame construction and image denoising](https://doi.org/10.1016/j.acha.2013.10.001)

# DDTF 模型和算法介绍
DDTF考虑如下的一个优化问题：

$$
\begin{equation}
\begin{aligned}
 \min_{v,W}& ||v-W(a_1,a_2,...a_m)g||_2^2+\lambda^2||v||_0\\
s.t.& \quad W^T W=I
\end{aligned}
\end{equation}
$$

其中g是图像，g是编码，W是由m个filter，即$(a_1,a_2,...a_m)$构成的紧框架。求解方法就是轮流最小化v和W。

1. 给定$(W^{(k)})$，求解$(v^{(k)})$.

$$
\begin{equation}
v^{(k)}:=argmin_v||v-W^{(k)}g||_2^2+\lambda^2||v||_0
\end{equation}
\label{iterA}
$$

2. 给定$(v^{(k)})$，求解$(W^{(k+1)})$.

$$
\begin{equation}
\{a_i^{(k+1)}\}_{i=1}^m:=argmin_{\{a_i\}_{i=1}^m}||v^{(k)}-W(a_1,a_2,...a_m)g||_2^2
\end{equation}
\label{iterB}
$$

对于(\ref{iterA})，存在唯一的最优解$( {\bar v}=T_{\lambda}(Wg))$, 对于(\ref{iterB})，可以通过SVD算法精确求解：

假设filter大小为$(r \times r)$，则共有$(r^2)$个filter。 Here $(g_n, n=1,2,...N)$ are all $(r\times r)$ patches from the input image g.

Let

$$
{\vec v}_n=(v^{(k),1}(n),v^{(k),2}(n),...,v^{(k),r^2}(n))^{T}, 1 \leqslant n \leqslant N.
$$
and define


$$
\begin{equation}
\left\{
\begin{aligned}
 V=({\vec v}_1,{\vec v}_2,...{\vec v}_N) \in \mathbb{R}^{r^2\times N}\\
 G=({\vec g}_1,{\vec g}_2,...{\vec g}_N) \in \mathbb{R}^{r^2\times N}\\
 A=({\vec a}_1,{\vec a}_2,...{\vec a}_N) \in \mathbb{R}^{r^2\times r^2}
\end{aligned}
\right.
\end{equation}
$$

Then we have

$$
\begin{equation}
\begin{aligned}
 ||v-Wg||_2^2&=\sum_{n=1}^N||{\vec v}_n-A^T{\vec g}_n||_2^2\\
&=\sum_{n=1}^N {\vec v}_n^T {\vec v}_n + {\vec g}_n^T A A^T {\vec g_n} - 2{\vec v}_n^T A^T {\vec g}_n \\
&= \sum_{n=1}^N {\vec v}_n^T {\vec v}_n + \frac{1}{r^2} {\vec g}_n^T{\vec g_n} - 2(A{\vec v}_n)^T{\vec g}_n \\
&= Tr(V^T)+\frac{1}{r^2}Tr(G^T G)-2Tr(AVG^T)
\end{aligned}
\end{equation}
$$

所以对于(\ref{iterB})，等价于：

$$
\begin{equation}
\max_A Tr(AVG^T) \quad s.t. \quad A^TA=\frac{1}{r^2}I_{r^2}
\end{equation}
$$


**引理1**
Let B and C be $(m\times r)$ matrices where B has rank r. Consider the constrained maximization problem:

$$
B_*=\arg\min_B Tr(B^T C) \quad s.t. \quad B^TB=I_r
$$
Suppose that the single value decomposition (SVD) of $(C)$ is $C = UDX^T$.Then $( B_*=UX^T )$.


根据引理，我们就能知道，通过SVD计算就可以求得(\ref{iterB})的精确解。



# 讨论

与K-SVD的主要区别在于通过加上了紧框架的约束， 反而构造出了一个相对容易求解的优化模型。但同时也失去了冗余字典模型的优势。

## 与 K-SVD 的异同

Method | 是否来自数据 | 是否正交 | 计算方法 | 计算速度 
:-: | :-: | :-: | :-: | :-: 
K-SVD | 是 | 冗余字典 | 每步为近似求解 | 慢 
DDTF | 是 | 正交字典 | 每步为较精确求解 | 快
Wavelets |  否 | 都有 | 直接构造 | 快

## 正交字典的优劣 
来自： [Orthogonal Matching Pursuit and K-SVD for Sparse Encoding](/files/ddtf/ksvd.pdf)
### Benefits of ONB 

- Analytic formulations 
- Well understood mathematical properties 
- Fast algorithms for projection 

### Limitations

- Orthonormal bases are optimal only for specific synthetic signals
  - If your signal looks exactly like your basis, you only need one coefficient 
- Limited expressiveness, all signals behave the same 
- Real world signals often take a lot of coefficients
  - Just truncate the series, which leads to artifacts like aliasing 


参考文献：

[Data-driven tight frame construction and image denoising](https://doi.org/10.1016/j.acha.2013.10.001)

[Orthogonal Matching Pursuit and K-SVD for Sparse Encoding](/files/ddtf/ksvd.pdf)