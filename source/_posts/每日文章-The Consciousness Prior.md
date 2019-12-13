---
title: "每日文章-The Consciousness Prior"
categories:
  - 读书笔记
tags:
  - Deep Learning
date: 2017-09-27
mathjax: true
---

好久不上arxiv，一上就看见了一篇Bengio大佬的新文章[The Consciousness Prior](https://arxiv.org/abs/1709.08568)，虽然和我的研究方向关系不太，但是名字太fancy，所以还是拿来读一下。读起来十分困难（简直是痛苦！），很多部分我都是猜测的其中含义，所以理解的可能和原文相去甚远。

标题大概可以理解为 “意识优先“？

举例来说，$(h_t=F(s_t,h_{t-1}))$是一个RNN，$(h_t)$是特别高维的向量，打一个比方，如果把这个RNN理解为人类的大脑，则$(h_t)$就是整个大脑在t时刻含有的所有内容。我们定义$(c_t)$是一个特别低维的向量，$(c_t=C(h_t,c_{t-1},z_t))$，其中$(z_t)$是一个随机的噪声源。$(c_t)$就可以理解为我们大脑此时流过的念头、想法。

我们引入一个verifier network可以将$(h_t)$与$(c_{t-k})$联系起来：

$$
(V(h_t,c_{t-k}) \in \mathbb{R})
$$

这个网络在已知$(c_{t-k})$给出t时间状态是$(h_t)$的概率。

所以我们最终的网络结构有两部分，一部分叫the attention mechanism，从高级状态中选出一些元素组合成conscious sub-states object。另一部分是从conscious sub-states预测action或未来的状态。

好像取出来的这个conscious state在一定程度上是可解释的？所以可以命名？

没有数值实验。


------

这篇文章真的是让我读得痛苦无比，所以后边的大部分内容都是我胡编的。。。