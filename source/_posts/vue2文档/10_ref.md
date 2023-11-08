---
title: 【Vue】ref
date: 2023-11-08 16:44:16
tags:
- Vue
categories: 
- 开发
---


# ref

## ref作用

在一般的`JavaScript`中，如果想要获取到某个`DOM`，是这样编写代码的：

```js
var item=document.getElementById("item");
// ...其它代码
```

通过获取到某个`DOM`，可以修改其样式、`innerHTML`（这部分内容可以参见`6_变量`）等，而在`Vue`中可以使用`ref`来代替：

```js
var item=this.$refs.item;
```

## 修改样式

```html
<template>
  <button @click="fun">按钮</button>
  <div style="opacity: 0" class="item" ref="item"></div>
</template>

<script>
  export default {
    methods: {
      fun(){
        this.$refs.item.style.opacity=1;
      }
    }
  }
</script>
```

