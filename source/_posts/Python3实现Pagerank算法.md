---
title: "Python3实现Pagerank算法"
categories:
  - 编程实战
tags:
  - Python
  - NLP
date: 2017-09-27
---

数据来自[ACL Anthology Network (All About NLP)](http://clair.eecs.umich.edu/aan/index.php)

数据都是长这样的：

```
C08-3004 ==> A00-1002
D09-1141 ==> A00-1002
D12-1027 ==> A00-1002
E06-1047 ==> A00-1002
H05-1110 ==> A00-1002
N01-1020 ==> A00-1002
N13-1036 ==> A00-1002
P13-2001 ==> A00-1002
P13-2073 ==> A00-1002
W11-2602 ==> A00-1002
W13-2702 ==> A00-1002
C10-1054 ==> A00-1004
W06-1008 ==> A00-1004
W03-0704 ==> A00-1005
W03-1206 ==> A00-1005
```

不太熟悉对于字符串的操作，特别是parser之类的。所以我想了一个很蠢的把字符串读入的方法，就是数哪几位是我们想要的，然后直接取出。之后用一个Dictionary记录论文编号和序号，然后用一个稀疏矩阵存储图关系。

```python
import numpy as np
import scipy.sparse as sparse
from sklearn import preprocessing

row = list()
col = list()
index = dict()
i = 0
with open('net.txt') as file:
    for line in file:
        pA = line[0:8]
        pB = line[13:21]
        if pA not in index:
            index[pA] = i
            i = i + 1
        if pB not in index:
            index[pB] = i
            i = i + 1
        row.append(index[pA])
        col.append(index[pB])
row = np.array(row)
col = np.array(col)
Mat = sparse.coo_matrix((np.ones(len(row)),(row,col)),shape=(i,i)).tocsr()
Mat=preprocessing.normalize(Mat, norm='l1').T
```

对于矩阵的归一化，我比较懒，就调用了来自sklearn的数据预处理包preprocessing。之后对于Pagerank的计算，就简单的使用幂法反复迭代，我太懒了就还没写终止准则，先这么凑合吧。

```
x=np.ones(i)
p=0.85
a=1-p
for i in range(0,100):
    x=p*(Mat*x)+a
```



