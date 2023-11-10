---
title: 【Vue】Electron图标
date: 2023-11-08 16:45:54
tags:
- Vue
categories: 
- 开发
---

# Electron图标

一般来说这样使用：

```js
async function createWindow() {
  // 注意这里添加上这一行来使用path
  const path = require('path');
  win = new BrowserWindow({
    // 其它代码...
    // 在这里添加:
    icon: path.join(__dirname, 'path/to/icon.png'),
    
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  // 其它代码...
}
```