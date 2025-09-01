# Dockerfile

## Dockerfile的作用

Dockerfile作为安装程序负责从`docker.io`中获取虚拟机并且执行相关的指令来运行虚拟机

## 添加忽略文件

由于项目中不可避免会有需要忽略的内容(比如`node_moudles`)，你可以在项目根目录中创建一个`.dockerignore`文件，用于添加需要忽略的文件，写法和`gitignore`一样

## 基本结构

```dockerfile
FROM <基础镜像>
WORKDIR <工作目录>
COPY <本地目录> <工作目录>
RUN <执行程序之前需要执行的操作>
EXPOSE <需要暴露的端口>
CMD <执行程序的命令>
```

- <基础镜像>: 见[Docker Hub](https://hub.docker.com/)，里面有很多常见的开发环境
- <工作目录>: 一般随意
- <本地目录>: 一般为`.`表示当前目录下所有文件(除了`dockerignore`里面的文件)
- <执行程序之前需要执行的操作>: 比如`pip install -r requirements`或者`npm install`等等
- <需要暴露的端口>: 搭建服务器所需要的内容，这个端口会直接映射到主机的端口号
- <执行程序的命令>: 比如`python main.py`等

注意，如果你需要用到时间，Docker虚拟机的默认时间显示的UTF+0的时间，你可以通过下面的命令自定义时区：
```dockerfile
ENV TZ=Asia/Shanghai
```

## 示例：

这是一个部署node.js服务器的dockerfile

```dockerfile
FROM node:18.20.4

WORKDIR /app

COPY . .

RUN npm config set registry https://registry.npmmirror.com
RUN npm install
RUN npm install pm2 -g

ENV TZ=Asia/Shanghai

EXPOSE 8811

CMD ["pm2-runtime", "main.js"]
```