---
type: docs
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

## 滚动

使用ref可以让一个DOM滚动

```js
this.$refs.Element.scrollTo({
  top: 100, // 滚动到距离顶部100像素
  behavior: 'smooth',
})
```