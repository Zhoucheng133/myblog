---
type: docs
title: day.js依赖
weight: 6
---


day.js的官方文档[在这里](https://dayjs.gitee.io/docs/zh-CN/installation/installation)

## 安装

- 使用yarn或者npm安装
  ```bash
  npm install dayjs
  # 或者使用yarn
  yarn add dayjs
  ```
- 这样导入js
  ```js
  const dayjs = require('dayjs');
  // 对于新版本的ES，这样导入
  import dayjs from 'dayjs';
  ```

## 使用

### 格式化时间

详细的文档[见这里](https://dayjs.gitee.io/docs/zh-CN/display/format)

```js
import dayjs from 'dayjs'

const dateNow=new Date();
console.log(dayjs(dateNow).format("YYYY-MM-DD hh:mm"))
// 输出当前的时间，例如2024-4-8 19:02
```

详细的格式化模板见文档