---
title: "scipy.sparse.linalg 生成线性算子"
categories:
  - 编程实践
tags:
  - Scipy
  - Python
date: 2017-05-11
---

```python
import numpy as np
import scipy
import scipy.sparse
import scipy.sparse.linalg
```

首先我们定义一个线性算子，不妨就定义一个恒同变换


```python
def identity(x):
    return np.matmul(np.eye(3),x)
identity([1.,2.,3.])
```


    array([ 1.,  2.,  3.])



之后我们定义一个类，具有matvec和shape两个属性，并声明一个matvec为我们刚建立的identity的linearfun对象。


```python
class linearfun(object):
    def __init__(self,func,shape):
        self.shape = shape
        self.matvec = func
identityobj=linearfun(identity,(3,3))
print(identityobj.shape,identityobj.matvec([1.,2.,3.]))
```

    (3, 3) [ 1.  2.  3.]


现在我们就可以使用scipy.sparse.linalg.aslinearoperator来将这个对象转换为一个scipy.sparse支持的线性算子了。也就可以使用scipy.sparse.linalg中的各种方法了。


```python
identityop=scipy.sparse.linalg.aslinearoperator(identityobj)
print(scipy.sparse.linalg.cg(identityop,[1.,2.,3.]))
```

    (array([ 1.,  2.,  3.]), 0)


我们其实还可以直接构造一个函数linearwrapper，直接就能把一个线性函数封装为一个scipy中的linearoperator


```python
class linearfun(object):
    def __init__(self,func,shape):
        self.shape = shape
        self.matvec = func
def linearwrapper(func,shape):
    return scipy.sparse.linalg.aslinearoperator(linearfun(func,shape))       
linearwrapper(identity,(3,3))([1.,2.,3.])
```


    array([ 1.,  2.,  3.])


