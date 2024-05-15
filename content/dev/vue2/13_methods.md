---
type: docs
title: methods
weight: 13
---


用于存放各种函数方法

## 基本使用

```js
methods: {
  add: function(){
    this.text+="hello!"
  },
}
```

或者也可以这样使用

```js
methods: {
  add(){
    this.text+="hello!"
  },
}
```

## 调用函数

### 在`v-on:`中调用

```html
<template>
  <div>
    <div @click=fun()>点击这里</div>
  </div>
</template>

<script>
export default {
  methods: {
    fun(){
      // 函数本体
    }
  }
}
</script>
```
关于`v-on`的内容见`15_v-on`

### 在其它函数中使用

```html
<template>
  <div>
    
  </div>
</template>

<script>
export default {
  methods: {
    fun(){
      // 函数本体
    },
    fun2(){
      // 在其它函数中使用
      this.fun();
    }
  },
  created: (){
    // 在created中使用
    this.fun();
  },
  mounted: (){
    // 在mounted中使用
    this.fun();
  },
}
</script>
```

### 在页面中显示

注意需要有函数括号，并且函数需要有返回值

```html
<template>
  <div>
    {{ fun() }}
  </div>
</template>

<script>
export default {
  methods: {
    fun(){
      retrun "Hello!"
    },
  }
}
</script>
```
上述例子仅限于举例用，在上述这种情况下一般使用`computed`而不是`methods`，详细见`14_computed`