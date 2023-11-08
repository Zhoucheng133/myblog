---
title: 【命令】Mac命令
date: 2023-11-08 16:29:18
tags:
- 命令
categories: 
- 开发
---

# Mac常用命令

## 设置终端代理

```shell
export http_proxy=http://127.0.0.1:1080
export https_proxy=$http_proxy
```

检查是否处于代理模式

```shell
curl cip.cc
```

## 查看IP地址

- IPv4地址

  ```bash
  curl 4.ipw.cn
  ```

- IPv6地址

  ```bash
  curl 6.ipw.cn
  ```

  
