---
type: docs
title: Mac常用命令
weight: 2
---

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

## 设置环境变量
 
 设置环境变量的文件: `/Users/{用户名}/.zshrc`

 添加环境变量：

 ```bash
 export PATH="path/to/your/sdk/bin:$PATH"
 ```