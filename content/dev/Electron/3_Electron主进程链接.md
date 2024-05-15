---
type: docs
---

# Electron主进程链接

<sup>*</sup>注意，在HTML页面中不允许进行`跨域访问(Cross-access)`，也就是不允许进行类爬虫的操作，但是使用Electron客户端可以

## 页面调用Electron主进程函数

对于使用`Vue2`中使用Electron

```js
// 注意导入ipcRenderer
import { ipcRenderer } from 'electron';

// 可以携带参数
ipcRenderer.send('ElectronMain', this.arg);
```

对于使用`Vue3`和`React`中使用Electron

```js
window.electron.ipcRenderer.send('ElectronMain', this.arg);
```

在主进程中
```js
// 注意导入ipcMain，可以直接接在其它包的后面
import { /* ... */ , ipcMain } from 'electron';

// ... 其它关于页面等代码

// arg为参数，可以为多个，注意需要添加event
ipcMain.on("ElectronMain", async (event, arg) => {
  // ...执行的内容
});
```

## 带有返回值的Electron进程链接

对于使用`Vue2`中使用Electron

```js
import { ipcRenderer } from 'electron';

ipcRenderer.invoke('ElectronMain', this.arg).then((response)=>{
  console.log(response);
});;
```

对于使用`Vue3`和`React`中使用Electron

```js
window.electron.ipcRenderer.invoke('ElectronMain', this.arg).then((response)=>{
  console.log(response);
});
```

在主进程中

```js
// 注意导入ipcMain，可以直接接在其它包的后面
import { /* ... */ , ipcMain } from 'electron';

// ... 其它关于页面等代码

// arg为参数，可以为多个
ipcMain.handle("ElectronMain", async (event, arg) => {
  // ...执行的内容
  return "Hello World!";
});
```