---
type: docs
title: 创建vue项目
weight: -1
---


**如果你并不了解`Vue2`的语法，建议先看`Vue2`文档**
**注意，`Vue3`可以使用`Vue2`的语法，因此`Vue3`的很多文章会忽略，如果需要查看见`Vue2`的相关文档**


1. 安装`node.js`  
   注意：不要使用`node.js`18以下的版本，无法创建Vue3项目
2. 使用如下命令来创建Vue3项目
   ```bash
   npm create vue@latest
   ```
3. 根据命令行的提示来输入相对应的内容：
   - 项目名称
   - 是否启用TypeScript
   - 是否启用JSX支持（一般选择否）
   - 是否引入Vue Router（根据情况选择）
   - 是否引入Pinia（一般选择否）
   - 是否引入单元测试（一般选择否）
   - 是否引入端到端测试工具（一般选择否）
   - 是否引入ESLint（根据情况选择）