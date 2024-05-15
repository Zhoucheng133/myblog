---
type: docs
---

# v-on

`v-on`，简单来说就是事件处理，可以用`@`代替，比如`v-on:click`等同于`@click

## 常用的事件

- `@click`：点击事件
- `@dblclick`：双击事件
- `@mouseover`：鼠标移动到元素的事件
- `@mouseout`：鼠标移出元素事件
- `@mouseenter`：鼠标进入元素事件（不会冒泡）
- `@mouseleave`：鼠标离开元素事件（不会冒泡）
- `@keydown`：键盘按下事件
- `@change`：改变事件，通常用在表单中

## 使用

```html
<template>
  <div>
    <button @click="showMessage"></button>
  </div>
</template>

<script>
export default {
  methods: {
    showMessage(){
      altert("This is a message!");
    }
  }
};
</script>
```