---
title: "Julia系列(2):用Julia实现迎风格式求解PDE"
categories:
  - 编程实战
tags:
  - Julia
date: 2018-12-16
---


我学习一门语言时，一般会先查着文档写上个简单的程序，找一找这门语言的感觉，然后再读它的文档。Julia既然是为科学计算设计的，我们就先用它来实现一个简单的迎风格式吧。

下面我们先看这个问题的MATLAB代码实现。

```matlab
% 考虑区域[-1,1]，求解无黏Burgers方程。
h=0.1; %网格尺度
N=1/h; 
t_max=0.2; %终止时刻为0.2
tau=1e-4; % 时间步长

U=zeros(2*N+1,1);
U(1:N)=1; %给定初值

%% 非守恒迎风格式
MaxIter=1e10;
T=0;
for i=1:MaxIter
    T=T+tau;
    diff=U(2:end)-U(1:end-1);
    U=U-tau/h*U.*((U>=0).*([0;diff])+(U<0).*([diff;0]));

    if T>=t_max
        break;
    end 
end
```

然后，我们再看它的Julia实现

```julia
h=0.1; 
N=Int(1/h); 
t_max=0.2; 
tau=1e-4; 

U=zeros(2*N+1,1);
U[1:N].=1; 

MaxIter=1e10;
T=0;
for i=1:MaxIter
    T=T+tau;
    diff=U[2:end]-U[1:end-1];
    U=U-tau./h.*U.*((U.>=0).*([0;diff])+(U.<0).*([diff;0]));

    if T>=t_max
        break;
    end
end
```

是不是看起来基本没有什么区别？嗯，确实如此。

- Matlab的zeros接受float类型的参数，只要其值是一个整数，而julia的zeros需要参数是Int类型。所以第二行是N=Int(1/h);
- Matlab的数组索引使用圆括号，而Julia的数组索引使用方括号。
- Julia中，所有的broadcast（广播）都是显式的，包括赋值、加减等，而matlab中，赋值、加减的广播是自动的，而只有乘方、数组乘法才需要用 . 指出。（Julia似乎在1.0前，对数组赋值的广播也是自动的，而1.0中是需要手动写出的，即U[1:N].=1，如果没有写 . 就会报错，但是文档中没有写清楚。）所以julia比起MATLAB的代码多了不少”.”。

嗯，似乎对于这么一个简短的程序，就这么一点区别了，特别的，julia的数组索引和matlab是相同的，即从1开始，所以如果从matlab转到julia，一定会很快习惯。Julia实在是一门十分好上手的语言，只要之前用过matlab或者python，很容易就可以将程序（数值计算部分）翻译到julia上。