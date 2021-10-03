---
title: "每日文章-CT有限角问题"
categories:
  - 读书笔记
tags:
  - CT
date: 2017-09-26
---

CT的有限角问题还是需要进行一些基础的了解的。我对有限角问题几乎没有任何了解，所以只能从谷歌上随便搜一些文章来看。

<!-- more -->

#### [Accurate image reconstruction from few-views and limited-angle data in divergent-beam CT](https://arxiv.org/abs/0904.4495)

(Submitted on 28 Apr 2009)

先读这篇文章是因为它引用高（800+）。

这篇文章中对于CT的稀疏角和有限角问题做了十分详尽的描述。例如，之前我一直不是很明白为什么180°的CT问题要算作有限角问题，因为一条X-ray正向反向射过来得到的结果是一样的，所以360的数据是冗余的，而180°恰好合适。这篇文章中解释的很好，因为CT并不只是平行束，更常见的是扇形束，但是对于扇形束而言，例如扇形角度为30°，则只有当我们得到210°时才没有丢失的数据，对于180°而言，这确实是一个有限角问题。

文章中的算法并没有特别的地方，就是对于TV模型进行优化，优化的过程是交替使用POCS（Projections onto convex sets）和Gradient Descent 算法，其中POCS优化$$\frac{1}{2}\vert \vert g-Pf\vert \vert_2^2$$ ,GD算法优化$$ \kappa \vert \vert \nabla f\vert \vert_1$$。但是根据数值结果，这个算法还是有不错的表现，即使是对于0～90°均匀分布60个射线的有限角问题，依然表现的很好。



#### [Image Prediction for Limited-angle Tomography via Deep Learning with Convolutional Neural Network](https://arxiv.org/abs/1607.08707)

(Submitted on 29 Jul 2016)

将FBP算法得到的低分辨率率、有瑕疵的图像经过一次$$3 \times 3$$卷积、一次$$1 \times 1$$卷积、一次$$3 \times 3$$卷积得到修正的图像，方法十分简单。取得一定效果，但是对于较大的瑕疵无法修正。



#### [Multi-Scale Wavelet Domain Residual Learning for Limited-Angle CT Reconstruction](https://arxiv.org/abs/1703.01382)

(Submitted on 4 Mar 2017)

将图像进行小波变换后在小波域上使用U-Net进行学习，然后再变换回图片域。

与直接在图片域上进行U-Net学习和在图片域上使用单分辨的类U-Net学习两种方法进行对比。

在实验结果中，取得了不错的成绩。但是比较奇怪的是，这个论文中120°有限角在TV算法下的表现极差，也比较符合我在试验中的认知。而 Accurate image reconstruction from few-views and limited-angle data in divergent-beam CT 中的TV模型在有限角问题下表现的太好了，不清楚什么原因。是因为一个是人体图片还有一个是模拟图片吗？

另外，这篇论文使用的是AAPM的low dose的投影数据，而训练用的“真实”图片是用full-angle fanbeam projection data重建得到的。而在有限角网络中，只使用120°或150°的数据使用FBP得到初始图片。