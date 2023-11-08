---
title: 【Vue】Electron主进程链接
date: 2023-11-08 16:44:38
tags:
- Vue
categories: 
- 开发
---


# Electron主进程链接

*注意，在HTML页面中不允许进行`跨域访问(Cross-access)`，也就是不允许进行类爬虫的操作，但是使用Electron客户端可以

## 页面调用Electron主进程函数

注意，以下内容基于Vue2 + Electron的实现，根据具体情况来进行修改

### 第一种方法

对于页面端：
```html
<template>
  <div>
    <button @click="mainMethod">调用主进程函数按钮</button>
  </div>
</template>

<script>
  // 确保导入了ipcRenderer
  import { ipcRenderer } from 'electron';
  export default{
    beforeDestroy(){
      // 在组件销毁前设置标志位为 true
      this.isDestroyed = true
    }
    data(){
      return {
        isDestroyed: false,
        // 下面这个是需要传递的参数
        arg: "Hello world!"
      }
    }
    created(){
      // 对于主进程中的函数返回之后执行本页面中的什么函数
      ipcRenderer.on('ElectronMainResult', this.mainResult);
    },
    methods:{
      mainResult(event, arg_back){
        console.log("完成执行，结果为:" + arg_back);
      },
      mainMethod(){
        // 如果进程已经销毁了，那么可以直接退出
        if(this.isDestroyed)
          return;
        // 注意传递的参数
        ipcRenderer.send('ElectronMain', this.arg);
      }
    }
  }
</script>

<style scoped>
/* ... */
</style>
```

对于客户端`background.js`

```js
// 注意导入ipcMain，可以直接接在其它包的后面
import { /* ... */ , ipcMain } from 'electron';

// ... 其它关于页面等代码

// arg为参数，可以为多个
ipcMain.on("ElectronMain", async (event, arg) => {
  // ...执行的内容
  // 返回的函数，可以添加参数
  event.reply('ElectronMainResult', 'Feedback!');
});
```

### 第二个方法

对于页面端

```html
<template>
  <div>
    <button @click="mainMethod">调用主进程函数按钮</button>
  </div>
</template>

<script>
// 确保导入了ipcRenderer
import { ipcRenderer } from 'electron';
export default{
  beforeDestroy(){
    ipcRenderer.removeAllListeners('ElectronMainResult');
  }
  data(){
    return {
      arg: "Hello world!"
    }
  }
  created(){
    // 对于主进程中的函数返回之后执行本页面中的什么函数
    ipcRenderer.on('ElectronMainResult', this.mainResult);
    ipcRenderer.removeAllListeners('ElectronMainResult');
  },
  methods:{
    mainResult(event, arg_back){
      console.log("完成执行，结果为:" + arg_back);
    },
    mainMethod(){
      // 注意传递的参数
      ipcRenderer.send('ElectronMain', this.arg);
    }
  }
}
</script>

<style scoped>
  /* ... */
</style>
```