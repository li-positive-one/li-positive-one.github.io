---
title: "个人Blog的搭建方案(1) 博客方案的选择"
categories:
  - 杂七杂八
tags:
  - Hexo
date: 2019-12-17
---

### 方案选择

我首先只在Markdown+静态网站的范围内考虑，原因有以下几点：

- 使用现有的Blog网站服务相当于把数据都放在了别人的网站上，如果想要迁移就会非常麻烦，远不如数据在自己手上放心。

- 如果自己建动态网站，就要找服务器，但是常常维护着一个服务器也是很麻烦的，特别是如果想用中国大陆的服务器就需要备案。
- Markdown写起来简单，备份、迁移比较容易，数据都在文件里，不用牵扯到数据库。

然后最常见的Markdown静态网站生成器有Jekyll, Hexo, Hugo. 

|        | 语言    | 生成速度 |
| ------ | ------- | -------- |
| Jekyll | Ruby    | 慢       |
| Hexo   | Node.js | 快       |
| Hugo   | Go      | 更快     |

我选择这几个方案并没有对速度有特别的要求，因为我Blog文章不多，更新频率也不大。主要还是看哪个框架好部署（要敲的命令短），另外对Latex的支持要好。其中我找到最简单的组合就是Hexo+Next主题。其中Next主题不只是简单的美化，而是嵌入了一些常用的扩展，例如Mathjax，搜索等，比起自己在模板页面里加script实在是方便很多。

考虑过使用Hugo代替Hexo，但是看见还需要重新配置Mathjax，就觉得麻烦，不想重新搞了。反正个人Blog这种东西，又是纯静态网站，又在Github上全开源，所以也没有什么安全问题。而且我对速度也不太敏感，凑活能用就行了。有的老师用jemdoc搭建的主页也不是好好的，jemdoc上次更新都是2012年了。

### 搭建过程

1. 按照Hexo的教程搭建一个网站
2. 按照Next的教程下载主题，并在网站config中配置使用该主题

```yaml
# _config.yml
theme: next
```

3. 在网站配置中启用搜索

```yaml
# _config.yml
search:
  path: search.xml
  field: post
  format: html
  limit: 10000
```

4. 在主题配置中启用搜索

```yaml
# source/_data/next.yml
local_search:
  enable: true
  # If auto, trigger search by changing input.
  # If manual, trigger search by pressing enter key or search button.
  trigger: auto
  # Show top n results per article, show all results by setting to -1
  top_n_per_article: 1
  # Unescape html strings to the readable one.
  unescape: false
  # Preload the search data when the page loads.
  preload: false
```

5. 在主题配置中启用Mathjax, 并安装相应依赖，修改markdown渲染器，参见[MATH](https://github.com/theme-next/hexo-theme-next/blob/master/docs/MATH.md)
```yaml
# source/_data/next.yml
math:
  # Default (true) will load mathjax / katex script on demand.
  # That is it only render those page which has `mathjax: true` in Front-matter.
  # If you set it to false, it will load mathjax / katex srcipt EVERY PAGE.
  per_page: true

  # hexo-renderer-pandoc (or hexo-renderer-kramed) required for full MathJax support.
  mathjax:
    enable: true
    # See: https://mhchem.github.io/MathJax-mhchem/
    mhchem: false

  # hexo-renderer-markdown-it-plus (or hexo-renderer-markdown-it with markdown-it-katex plugin) required for full Katex support.
  katex:
    enable: false
    # See: https://github.com/KaTeX/KaTeX/tree/master/contrib/copy-tex
    copy_tex: false
```
如果是windows，可以这么安装依赖。
```powershell
# Run in powershell
choco install pandoc
npm uninstall hexo-renderer-marked
npm install hexo-renderer-pandoc # or hexo-renderer-kramed
```
