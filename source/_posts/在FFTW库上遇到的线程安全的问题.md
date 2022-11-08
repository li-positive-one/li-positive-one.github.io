---
title: "在FFTW库上遇到的线程安全的问题"
categories:
  - 编程实践
tags:
  - Fortran
date: 2022-11-08
---

其实是跑别人的代码，复现结果，但是一直遇到内存非法访问的问题，报错提示问题出现在调用dfftw_plan_dft_3d时。而且当开启Openmp并行时就会遇到，而当串行运行时则正常。显然这是一个由于并行化引起的问题。

<!-- more -->

但是，这份代码应当是没有太大问题的，因为之前有不少人也都跑过。我对原始代码没有做改动，但是在Makefile中我做了一些改动，我使用了gfortran和FFTW来代替原本的ifort和MKL中的FFTW接口(下面称为MKL/fftw)。这是因为服务器上原始的ifort会报错过期，又一直懒得装新的intel oneapi, 所以干脆换了编译工具链，想着计算结果不会有太大问题。

然后上网一查，果然问题就出现在FFTW和MKL/fftw的区别中。下面简单的表示了一下这份代码中关于并行计算FFT的部分。并行化非常简单粗暴，不管是plan还是execute，都在并行区中，会调用多份。

```c++
void dofft(...){
  dfftw_plan_dft_3d(...);
  dfftw_execute_dft(...);
  dfftw_destroy_plan(...);
}

void parallel_dosomething(){
  #pragma omp parallel for
  for(...){
    dofft(...);
  }
}
```

但是FFTW的[文档](https://www.fftw.org/fftw3_doc/Thread-safety.html)中明确写出

> The upshot is that the only thread-safe routine in FFTW is fftw_execute (and the new-array variants thereof). All other routines (e.g. the planner) should only be called from one thread at a time. So, for example, you can wrap a semaphore lock around any calls to the planner; even more simply, you can just create all of your plans from one thread. We do not think this should be an important restriction (FFTW is designed for the situation where the only performance-sensitive code is the actual execution of the transform), and the benefits of shared data between plans are great.

也就是说，这样一份代码毫无疑问是有问题的，理应跑不通。但是前人的经验又告诉我，能跑。所以我安装了MKL库，改为依然使用gfortran，但是链接的从FFTW改为MKL, 果然跑通了。

在MKL的相关[文档](https://www.intel.com/content/www/us/en/develop/documentation/onemkl-developer-reference-c/top/appendix-d-fftw-interface-to-onemkl/fftw2-interface-to-onemkl/wrappers-reference/multi-threaded-fftw.html)中，说了

> Unlike the original FFTW interface, every computational function in the FFTW2 interface to Intel® oneAPI Math Kernel Library provides multithreaded computation by default, with the maximum number of threads permitted in FFT functions (see "Techniques to Set the Number of Threads" in Intel® oneAPI Math Kernel Library Developer Guide).

这应该就是FFTW和MKL/fftw的一个很大区别了。如果想简单粗暴的并行计算很多FFTW，可能使用MKL库是一个很好的捷径。如果计算的这些FFT plan大小都一样，使用原始的FFTW并把创建销毁plan放在并行区外是很好的办法。如果想用原始的FFTW处理各种各样的plan并行，可以参考我在知乎上发现的这篇文章[用于OpenMP的线程安全FFTW接口](https://zhuanlan.zhihu.com/p/33362426)。