---
title: "Linux管理员必备命令 runuser"
categories:
  - 生活小窍门
tags:
  - Linux
date: 2017-05-15
---


比如说有同学不会ssh，只能用VNC登录，但不幸的由于服务器重启，他的VNC进程被关闭了，于是向我求救。我该如何高效的解救他呢？

比起教他如何使用ssh，以及更改他的密码登录等，最简单的方法就是使用runuser命令。例如：

`runuser -l hisusername -c 'vncserver'`

runuser这条命令相当方便，可以让管理员以其他用户的身份运行进程。