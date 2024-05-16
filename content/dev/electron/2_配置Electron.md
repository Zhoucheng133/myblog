---
type: docs
title: 配置Electron
weight: 2
---


## 窗口配置

注意，下面的代码都在主进程中文件中

### 创建大小

```js
const win = new BrowserWindow({
  width: 1100,	// 这里是宽度
  height: 770,	// 这里是高度
  webPreferences: {
    nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
    contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
  }
})
```

注意，不需要写`px`

### 配置是否缩放


```js
const win = new BrowserWindow({
  resizable: false,	// 在这里设置
  webPreferences: {
    nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
    contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
  }
})
```

### 设定沉浸式窗口栏

```js
const win = new BrowserWindow({
  titleBarStyle: 'hiddenInset',	// 在这里设置
  webPreferences: {
    nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
    contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
  }
})
```

注意，这时候可能会导致窗口无法拖动，需要在窗口中增加一个可以拖动的块，如下

```html
<template>
  <div class="dragArea"></div>
</template>

<style scoped>
.dragArea{
  position: fixed;
  top: 0;
  left: 0;
  height: 30px;
  width: 100%;
  -webkit-app-region: drag;
}
</style>
```

## Electron-builder配置

对于使用`vue2`的项目，文件在`vue.config.js`中

```js
module.exports = {
  pluginOptions: {
    electronBuilder: {
      // 启用node.js的原生库
      nodeIntegration: true,
      // 如果使用外部依赖库的图标添加下面这行防止生成之后不显示图标
      customFileProtocol: "./",
      // 附属文件
      // 文件位于根目录的build文件夹中，这里可以自定义配置，需要的时候使用path，例如:
      // path.join(__dirname, '../build/icon.png')
      "extraResources": ["./build/**"],
      // 对于macOS，分别导出x64版本和Apple Silicon版本
      builderOptions: {
        artifactName: '${productName}-${version}-${os}-${arch}.${ext}',
        mac: {
          target: {
            arch: ['x64', 'arm64'],
            target: 'zip'
          }
        }
      },
    },
  },
}
```

对于使用`Vue3`或者`React`中，文件位于`electron-builder.yml`中