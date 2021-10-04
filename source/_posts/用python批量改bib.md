---
title: "如何用Python批量修改bib参考文献"
categories:
  - 杂七杂八
date: 2021-10-04
tags:
  - Python
  - Latex
---

## 我的目标

因为想要统一参考文献的格式，主要是有两点需要改，一是修改期刊名，改成缩写形式，二是将作者的名改成首字母大写，且忽略中间名，也就是"Apple Ben Cat"要改成"A. Cat"这样。

## 失败的尝试

首先我的想法是尽量通过自动化的处理，以及尽量保持bib文件少修改的情况下解决这个问题。关于期刊缩写的处理会在另一篇文章中介绍。对于姓名的缩写，我肯定是先希望通过在latex中定义style的方式解决，而非去手动修改bib文件。

<!-- more -->

### 更改bibtex格式

参考[https://blog.csdn.net/chikily_yongfeng/article/details/86553359](https://blog.csdn.net/chikily_yongfeng/article/details/86553359)，试图用makebst构造一个好用的bst参考文件格式，但是在回答完几十个问题，生成了bst文件后，才发现这些问题中没有我想要的而忽略中间名的选项。


这样我就不能简单的生成bst文件达到目的了。此时依然有通过bst文件达到目的的途径，就是手动修改bst文件，因为bst文件本身就是一套定义了怎么处理参考文件格式的代码文件，但是因为实在看不懂bst用的那一套语言，所以只能放弃了。

### 改用biblatex

biblatex中似乎能比较好的自定义名字的处理方法，而且我确实也基本实现了我想要的姓名处理方法。但是问题是biblatex的参考文献显示风格没有和bibtex完全相同的选择。我试了很多设置，最后斜体等处理还是和bibtex不一样，无法实现无感的替换bibtex。

## 还是做个快乐的调包侠

选择了[bibtexparser](https://bibtexparser.readthedocs.io/en/master/)这个python包，能解析bib文件。然后用很简单的字符串替换就能解决问题了。

```python
import bibtexparser
from bibtexparser.bparser import BibTexParser
from bibtexparser.customization import *

def customizations(record):
    record = author(record)
    return record

def Abbr(author):
    if author=="others, ":
        return "others"
    fn,gn=author.replace(" ","").split(",")
    return fn+", "+gn[0]+"."

with open('./ref.bib') as bibtex_file:
    parser = BibTexParser()
    parser.customization = customizations
    bib_database = bibtexparser.load(bibtex_file, parser=parser)
    for entry in bib_database.entries:
        entry["author"]=" and ".join([Abbr(author) for author in entry["author"]])
        print(entry["author"])

with open('bibtex.bib', 'w') as bibtex_file:
    bibtexparser.dump(bib_database, bibtex_file)
```

