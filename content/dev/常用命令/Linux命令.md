---
type: docs
title: Linux常用命令
weight: 1
---

## 查看IP地址

- IPv4地址

  ```bash
  curl 4.ipw.cn
  ```

- IPv6地址

  ```bash
  curl 6.ipw.cn
  ```

## nginx

### 安装

```bash
sudo apt update
sudo apt upgrade
 ```

```bash
sudo apt install nginx
```

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

```bash
sudo systemctl status nginx
```

## 配置文件

一般位于`/etc/nginx/nginx.conf`

内容大概如下：

```conf
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
	worker_connections 768;
}

http {
	sendfile on;
	tcp_nopush on;
	tcp_nodelay on;
	keepalive_timeout 65;
	types_hash_max_size 2048;

	include /etc/nginx/mime.types;
	default_type application/octet-stream;

	ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE
	ssl_prefer_server_ciphers on;

	access_log /var/log/nginx/access.log;
	error_log /var/log/nginx/error.log;

	gzip on;

	include /etc/nginx/conf.d/*.conf;
	include /etc/nginx/sites-enabled/*;
    
  server {
		# 这里是你需要添加的
  }
}
```

### 添加静态页面

**（下面代码仅显示server部分）**

```conf
server{
	listen 80;	# 端口号，一般为80
	server_name example.com;	# 网站名字
	
	ssl on;	# 启动ssl证书（如果有）
  ssl_certificate /path/to/example.com.pem;	# ssl证书位置
  ssl_certificate_key /path/to/example.com.key;	# ssl key的位置
  
  # 访问根目录=>
  location /{
    root /path/to/folder;	# 静态页面的目录
  	index index.html;	# 主页文件名
  }
}
```

如果希望所有路径都指向index.html（比如使用了vue-router），那么:

```conf
server{
	listen 80;	# 端口号，一般为80
	server_name example.com;	# 网站名字
	
	ssl on;	# 启动ssl证书（如果有）
  ssl_certificate /path/to/example.com.pem;	# ssl证书位置
  ssl_certificate_key /path/to/example.com.key;	# ssl key的位置
	
  # 访问所有目录=>
  location /{
    root /path/to/folder;	# 静态页面的目录
  	try_files $uri /index.html; # 主页文件名
  }
}
```

## 反向代理

将某个端口映射到另外一个端口

例如下面的例子就是将8080端口映射到80/api

```conf
server{
	listen 80;	# 端口号，一般为80
	server_name example.com;	# 网站名字

	ssl on;	# 启动ssl证书（如果有）
	ssl_certificate /path/to/example.com.pem;	# ssl证书位置
	ssl_certificate_key /path/to/example.com.key;	# ssl key的位置

	# 反向代理，当访问到/api时=>
  location /api{
  	proxy_pass http://127.0.0.1:8080/api;
  }

	# 访问根目录=>
	location /{
		root /path/to/folder;	# 静态页面的目录
		index index.html;	# 主页文件名
  }
}

```

⚠️注意：如果反向代理使用的是SpringBoot，将项目中的目录和`nginx`配置匹配：

在`application.properties`文件中添加：

```bash
server.servlet.context-path=/api
```

### 重启nginx

```bash
sudo systemctl restart nginx
```

## 搜索进程

```bash
ps aux | grep <进程名称>
```

得到的结果**第二列**为进程ID，可以使用命令来销毁
```bash
kill <进程ID>
```

## 进程管理
可以使用htop
```bash
# 如果没有安装的话
sudo apt install htop

sudo htop
```

## 后台执行进程
可以使用screen

### 安装
```bash
sudo apt install screen
```

### 新建进程
```bash
sudo screen -S <进程名称>
```

### 查看进程
```bash
sudo screen -r <进程名称>
```