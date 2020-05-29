---
title: "Github Pages 的LaTeX公式支持"
categories:
  - 杂七杂八
tags:
  - Latex
  - Markdown
  - Jekyll
date: 2017-09-26
---

#### 首先，将Jekyll的Markdown processor改为kramdown

确定`_config.yml`中是`markdown    : kramdown`

#### 添加 Mathjax

在post.html中的header中添加如下语句

```jsp
<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
```

#### 现在你的Github Pages应该就可以渲染latex公式了！