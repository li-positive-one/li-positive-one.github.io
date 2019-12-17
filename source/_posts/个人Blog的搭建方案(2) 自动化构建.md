---
title: "个人Blog的搭建方案(2) 自动构建"
categories:
  - 杂七杂八
tags:
  - Hexo
date: 2019-12-18
---



个人博客用Hexo+Next已经很方便了，但是仍然存在不足，就是我有好几个常用的工作PC，所以需要在每个PC上安装一套node.js/pandoc等依赖，实在是有些麻烦。所以我希望像github pages+jekyll一样，只用上传markdown就能自动构建出网站。这样我的repo中也可以很干净，只需要写markdown文本就行了，本地不需要安装任何依赖。



# Travis CI
[![Build Status](https://travis-ci.com/li-positive-one/li-positive-one.github.io.svg?branch=docs)](https://travis-ci.com/li-positive-one/li-positive-one.github.io)

有点复杂，睡醒了再更。







# Netlify
[![Netlify Status](https://api.netlify.com/api/v1/badges/d854ca11-b95a-4f00-b89c-a236726b8391/deploy-status)](https://app.netlify.com/sites/lizhengyi/deploys)

Netlify似乎专业做静态网站构建和自动Deploy，所以在这方面体验确实非常好，好到什么地步了呢？

只需要github仓库授权，告诉他我的构建命令是`hexo g`，deploy的文件在`public`目录下，其余的事情它自己全部解决了！不需要写任何配置文件，网站就一次pass了，包括pandoc之类的依赖似乎他都自己解决掉了。总之，生成网页非常方便，而且构建速度也比Travis CI快不少。因为Travis CI每次构建都需要安装依赖，而Netlify的依赖可能都保存下来了，我看构建的log中每次只需要`hexo g`就结束了。

但是Netlify都是构建在自己的网站上的，所以导致一个问题就是Netlify在中国大陆地区的访问不一定能稳定，包括github pages也是一样。所以我还是没有把鸡蛋都放在这一个篮子里。两开花~两开花~