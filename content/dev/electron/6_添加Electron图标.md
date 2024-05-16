---
type: docs
title: 添加Electron图标
weight: 6
---


对于`Vue2`中使用Electron

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

对于`Vue3`或`React`中使用Electron
```js
import icon from 'path/to/icon/image?asset'

function createWindow() {
  const mainWindow = new BrowserWindow({
    // ... 其它配置
    ...(process.platform === 'linux' ? { icon } : {}),
  })
  // ... 其它内容
}
```