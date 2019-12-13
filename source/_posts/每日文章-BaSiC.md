---
title: "每日论文: A BaSiC tool for background and shading correction of optical microscopy images"
categories:
  - 读书笔记
tags:
  - Denoising
  - Optical microscopy
date: 2019-06-02
mathjax: true
---

# 问题背景

光学图像是生物医学研究中不可或缺的一个工具。所有的现代光学成像（无论是全切片成像，高通量延时摄影等）都依赖于图像处理和量化方法来分析和解析数据。但是，光学显微图像，由于光照的影响，会在中心和边界处有不同的亮度。这不止会降低图像的质量，而且对进一步的量化分析会产生影响。例如，在全切片成像中就会引入不连续性。

![](/images/BaSiC/WSI.png)

此外，在延时摄影中，由于光漂白效应，会产生随时间变化的亮度降低，影响对细胞和细胞器的分析。

# 模型与求解

模型：

A measured image sequence, $I^{meas}(x)=I_1^{meas}(x),...I_n^{meas}(x)$ can be related to its uncorrupted true correspondence, $I^{true}=I^{true}_1(x),...,I^{true}_n(x)$ , with a multiplicative flat-field $S(x)$ and an additive dark-field $D(x)$:

$$
\begin{equation}
I_{i}^{meas}(x)=I_i^{true}(x) \times S(x)+D(x)
\end{equation}
$$

The BaSiC correction begins by sorting the image sequence $I^{meas}$  into $I^{sort}$ by intensities at each pixel $x$, converting each sorted image $I^{sort}_i(x)$ into a column vector $I^{sort}_i$ (from now on, we denote the same parameter in image space with $(x)$
and as vector without $(x)$). Hence, we construct the measurement matrix as

$$
I=[I_1^{sort},...I_n^{sort}]
$$

Each column vector of the measurement matrix $I$ is decomposed into

$$
\begin{equation}
I_{i}=B_i \times S + D +R_i
\end{equation}
$$

前两项构成了一个rank 2的稀疏矩阵，最后一项的残量矩阵$I^R$我们假设是稀疏的，然后就有这个优化问题：

$$
\begin{equation}
\begin{aligned}
&\min_{B,S,D}|I^R|_0\\
&s.t. \quad I=I^B+I^R,I^B = B \odot S \oplus D,
\end{aligned}
\label{model1}
\end{equation}
$$

equation (\ref{model1}) 无法直接求解，因为它的解不唯一。 而且，这个问题是NP难的。所以，我们对$S$和$D$加正则化项，把L0 norm 替换成 L1 norm.

$$
\begin{equation}
\begin{aligned}
&\min_{B,S,D} \{|W \circ I^R|_1 +\lambda_s|\mathcal F (S(x))|_1+ \lambda_d|\mathcal F(D^R(x))|_1+\lambda_d|D^R(x)|_1\}\\
&s.t. \quad I=I^B+I^R,I^B = B \odot S \oplus D\\
&D=D^Z+D^R, D^Z \in [0,min(I)],
\end{aligned}
\label{model2}
\end{equation}
$$

暗场 D 被分解成平均值 $D^Z$ 和残差 $D^R$. 当$S(x)$和$D(x)$被求出后，就可以恢复图像

$$
\begin{equation}
\begin{aligned}
I^{corr}(x)=(I^{meas}(x)-D(x))/S(x)
\end{aligned}
\end{equation}
$$

因为对亮度排序过，所以求得的$B_i$不适用于原图。所以引入两步的方法。
第一步，通过排序后的$I$，利用equation(\ref{model2})求出$S^*,D^*$；第二步，使用$S^*,D^*$和未排序的$I$带入equation(\ref{model2})求解，此时equation(\ref{model2})简化为：

$$
\begin{equation}
\begin{aligned}
&\min_{B}  |W \circ I^R|_1\\
&s.t. \quad I=I^B+I^R,I^B = B \odot S^* \oplus D^*\\
\end{aligned}
\label{model3}
\end{equation}
$$

对于延时影像，可以这样修正：

$$
\begin{equation}
I^{corr}_i(x)=(I^{meas}_i(x)-D(x))/S(x)-B_i+B_{norm}
\end{equation}
$$

其中$B_{norm}$是主观选定的背景。可以选$B^{norm}=mean_i{B_i}$对于亮场北京的视频。对于荧光视频，可以选$B_{norm}=0$.

# 实验


# 参考文献:

[1] Peng, T. et al. A BaSiC tool for background and shading correction of optical microscopy images. Nat. Commun. 8, 14836 doi: 10.1038/ncomms14836 (2017).