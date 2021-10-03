---
title: "nvidia/flownet2-pytorch的安装"
categories:
  - 编程实践
tags:
  - Pytorch
date: 2018-12-23
---

读完flownet的文章，准备跑一下他的代码，发现有nvidia出品的代码，肯定效率最高啦，所以就git clone下来准备跑，但是遇到了好多坑。

<!-- more -->

![README.md 里的安装介绍](/images/flownet2/1.png)

README.md里的安装介绍特别不走心，因为nvidia其实是想让大家都用他的nvidia-docker来跑程序的。那样确实很方便，但是对于传统的基于slurm/pbs的服务器，我们肯定不能采用docker的形式来跑，所以就按照readme.md进行安装。

![install.sh](/images/flownet2/2.png)

install.sh 其实就相当于安装几个pip包，但是是编译安装的，用到了nvcc。最坑的一点在于没有给出任何编译环境，我试了各种环境终于编译成功了，就是pytorch0.4+cuda9.2+cudnn7+gcc6.5.0。之前的各种组合都报错。