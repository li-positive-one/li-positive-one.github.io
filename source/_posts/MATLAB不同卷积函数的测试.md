---
title: "MATLAB不同卷积函数的测试"
categories:
  - 编程实践
tags:
  - Matlab
date: 2019-01-29
---

最近的编程中发现MATLAB中有的卷积速度比我想象的要慢得多（特别是GPU加速后依然很慢），就测试了一下使用不同函数实现卷积的速度。

```matlab
% 首先是对两个大的2D数组做'valid'卷积，其实就相当于做dot。
A=rand(1000,1000);
gA=gpuArray(A);
B=rand(1000,1000);
gB=gpuArray(B);

fprintf("dot:\n")
tic;    sum(dot(A,B),'all');toc;
tic;    sum(dot(gA,gB),'all');toc;

fprintf("conv2:\n")
tic;    conv2(A,B,'valid');toc;
tic;    conv2(gA,gB,'valid');toc;

fprintf("filter2:\n")
tic;    filter2(A,B,'valid');toc;
tic;    filter2(gA,gB,'valid');toc;

fprintf("convn:\n")
tic;    convn(A,B,'valid');toc;
tic;    convn(gA,gB,'valid');toc;


dot:
时间已过 0.005201 秒。
时间已过 0.000427 秒。
conv2:
时间已过 0.007935 秒。
时间已过 0.843050 秒。
filter2:
时间已过 0.393373 秒。
时间已过 1.209777 秒。
convn:
时间已过 0.008185 秒。
时间已过 0.918709 秒。
```

可以看到，对于这种情况，GPU不仅在卷积函数中不能加速，反而会很大的影响运算速度。最快的方式是使用gpu加速的dot。
