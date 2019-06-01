---
title: "Julia系列(1):安装与环境配置"
categories:
  - 编程实战
tags:
  - Julia
date: 2018-12-15
---

很早之前就看见各种安利Julia的文章了，恰好Julia 1.0已经发布了，这门快速发展的语言应该已经具有了一定的稳定性，所以今天终于上手试了一试。

## Julia 安装与环境配置，教程和文档

Julia可以从[官网](https://julialang.org/)直接下载二进制包，里边有.sh文件，指定安装路径就能安装了，安装后将/Julia/bin添加到PATH就能使用了。

除了Julia（解释器？编译器？）本身，还可以选择直接下载[JuliaPro](https://juliacomputing.com/products/juliapro.html)，里边除了julia本体，还有Juno IDE（一个基于Atom的Julia IDE）和一些常用的包。

不过由于Julia本身就具有很好的包管理器和虚拟环境支持，而且我也不太习惯atom这个编辑器，所以我并没有选择JuliaPro，而是直接使用了Julia+IJulia+Jupyter。

安装好julia与anaconda后，我们先在终端中运行julia，启动julia的REPL环境（julia语言虽然运行快，但是启动时预热很慢），然后在其中运行下列命令

```julia
import Pkg
Pkg.add("IJulia")
```

然后再启动 jupyter notebook 或者 jupyter lab，就可以创建julia的notebook了。

Julia非常友好的一点在于其中文文档比较全面，但是文档也有一些问题，一些1.0中新出现的特性并没有反映在文档中，无论是中文还是英文文档。

我在搜索julia环境配置的时候也发现了一个Lecture，是基于julia 1.0 的计量经济学，是一个很好的学习julia的讲义。

[Quantitative Economics with Julia](https://lectures.quantecon.org/jl/)