---
title: "个人Blog的搭建方案"
categories:
  - 杂七杂八
tags:
  - Hexo
date: 20179-12-17
---

### 方案选择

目前选择的方案是Hexo生成器+Next主题，原因主要是这样的搭配对于Latex有非常好的支持，配置起来相对简单。

考虑过使用Hugo代替Hexo，但是看见还需要重新配置Mathjax，就觉得麻烦，不想重新搞了。反正个人Blog这种东西，又是纯静态网站，又在Github上全开源，所以也没有什么安全问题。而且我对速度也不太敏感，凑活能用就行了。有的老师用jemdoc搭建的主页也不是好好的，jemdoc上次更新都是2012年了。

### 搭建过程

1. 安装基本的依赖 node, pandoc

```
choco install node -y
choco install pandoc -y
```

2. 安装hexo `npm install -g hexo-cli `

3. 新建一个网站（具体过程参见hexo文档）
4. 下载[Next主题](https://github.com/theme-next/hexo-theme-next)，并配置Hexo 使用Next主题
5. 修改网站配置，例如配置deploy参数
6. 修改主题配置，注意配置文件可以写在网站配置文件里，参见[Overriding-Theme-Config](https://hexo.io/docs/configuration.html#Overriding-Theme-Config). 
7. 配置Mathjax
   1. 修改主题配置，启用mathjax
   2. 修改markdown渲染器，参见[MATH](https://github.com/theme-next/hexo-theme-next/blob/master/docs/MATH.md)

