---
title: "Noise2Noise to Noise2Void to more"
categories:
  - 读书笔记
tags:
  - Denoise
date: 2019-12-13s
mathjax: true
---

# Noise2Noise

Lehtinen, Jaakko, et al. "Noise2Noise: Learning Image Restoration without Clean Data." *International Conference on Machine Learning*. 2018.


传统的模型是优化
$$
{\arg\min}_\theta \sum_{i}{L(f_\theta\left(\hat{x_i}\right),y_i)}
$$

其中$$\hat x_i$$是输入的含噪声图像，$$y_i$$是清晰图片。我们学习一个从含噪声图片到清晰图片的映射。

---
以标量为例子，学习
$$
\arg\min \mathbb{E}_y\{L(z,y)\}
$$
使用L-2 loss $$L(z,y)=(z-y)^2$$，学习到的最优解就是y的均值
$$
z=\mathbb{E}_y\{y\}
$$

用L2-loss直接学习一个映射从带噪声图片->高清图片有一个坏处，就是这个映射并不是一对一的。不同的高清图片可能会对应同一个低清图片。直接用L2 loss的结果就是学习到的映射把低清图片映射为高清图片的一个期望，也就是带有模糊。所以有些工作就是把L2 loss改成discriminator loss.

---
但是这个缺点同时也会带来好处，也就是我们学习的其实是Label的一个平均值，那么如果我们的Label如果有噪声，但是噪声的均值是0，我们用这种图片作为Label训练得到的网络依然是一个去噪的神经网络。

而Noise2noise是优化
$$
{\arg\min}_\theta\sum_{i} L\left(f_\theta\left(\hat{x_i}\right),\hat{y_i}\right)
$$

其中 $$E\left(\hat{y_i}\middle|\hat{x_i}\right)=y_i$$

$$\hat x_i$$与$$\hat y_i$$都是有噪声的图片，且不一定含有同一种噪声。但是如果$$\hat y_i$$中蕴含的噪声分布均值为0，那么我们就可以用$$\hat y_i$$作为label来训练网络。

# Noise2Void

Krull, Alexander, Tim-Oliver Buchholz, and Florian Jug. "Noise2void-learning denoising from single noisy images." *Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition*. 2019.

传统的监督学习去噪可以理解为网络输入一个Patch，输出patch中心的像素。
$$
f(x_{RF(i)};\theta)=\hat s_i
$$

然后Noise2Noise可以理解为有两个noisy image $$(x^j,x^{'j})$$, 

$$
x^j=s^j+n^j ~and ~x^{'j}=s^j+n^{'j}
$$

与传统的监督学习以$$s_i$$作为label不同，N2N以$$x^{'j}$$作为label。尽管这个网络学习从一个noisy image变换到另一个noisy image，但是最后训练仍会收敛到正确的解，这是因为我们假设noisy image的期望值就是正确解 $$\mathbb{E}[x_i]=s_i$$.

---
我们下边有两个假设：

1. 每个像素 $$s_i$$ 和周围的像素 $$s_j$$ 不独立。
2. 噪声 $$n_i$$ 只和 $$s_i$$ 有关，但相互之间独立。

然后我们就发现，只有一张noisy image我们也可以用这种方法训练网络。我们把每个patch最中间的像素挖掉，用周围的像素预测中心的像素。可以理解为由于假设，中心处的噪声和周围的噪声独立，所以我们可以用N2N的方法来训练。

在实现中，先打patch，然后过mask，然后训练。

# High-quality self-supervised deep image denoising

Laine, S., Karras, T., Lehtinen, J., & Aila, T. (2019). High-quality self-supervised deep image denoising. In *Advances in Neural Information Processing Systems* (pp. 6968-6978).

这篇文章和Noise2Void比较类似，模型
$$
p(y|\Omega_y)=\int p(y|x)p(x|\Omega_y)dx
$$
左边的是训练数据，中间的是噪声模型，右边的是不知道的。

如果我们求解结束了，我们可以根据
$$
p(x|y,\Omega_y) \propto p(y|x)p(x|\Omega_y)
$$
来生成干净图像。其中中间是Noise Model，右边是Prior。

---

所以这篇文章的算法分成两步：

1. 训练一个神经网络，$$\Omega_y \rightarrow (\mu_x,\Sigma_x)$$ 这是高斯分布prior $$p(x|\Omega_y)$$ 的参数。
2. 测试时，把$$\Omega_y$$输入神经网络得到$$(\mu_x,\Sigma_x)$$, 然后根据闭式解析解计算$$\mathbb{E}[p(x|y,\Omega_y)]$$。

与N2V对于，我们发现N2V只是学习了$$p(x|\Omega_y)$$。而没用用上这个像素点本身的值，也就是y的信息。

---

在实际实现时，网络不用N2V中的Mask方式，而是训练了4个网络，每个网络忽略一个方向的数据，从而达到blind-spot的效果。进一步的，可以把这4个网络变成1个网络，把输入图片旋转4次作为不同的输入，然后在最后旋转回来，再通过1*1的卷积融合。

在实现卷积时，防止receptive field向下扩展的最简单方法就是把卷积后的结果往上平移。平移卷积核高度一半的距离，这样receptive field就会依然保持在上半平面。
