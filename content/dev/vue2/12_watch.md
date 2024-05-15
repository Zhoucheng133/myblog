---
type: docs
---

# watch

watch一般用于监听一个变量的变化执行的函数

## 一般使用

```js
  watch: {
    text: function(newVal,oldVal){
      console.log('新的值为',newVal);
      console.log('旧的值为',oldVal);
    }
  }
```

## 监听一个Object对象
注意，`Vue`直接监听一个Object对象的时候，如果只是修改了Object的其中一个key的值，那么并**不会触发watch内容**：

**注意，以下为错误示例！**

```html
<template>
  <div>
    {{ obj.name }}
    <button @click="changeName">修改name</button>
  </div>
</template>

<script>
// 注意，以下为错误示范！
export default{
  data(){
    return {
      obj: {
        name: "张三",
        age: 20,
      }
    }
  },
  methods: {
    changeName(){
      this.obj.name="李四";
    }
  },
  watch: {
    // 点击按钮并不会触发下面的函数
    obj: function(){
      console.log("obj changed!");
    }
  }
}
</script>
```

如果要监听完整的Object对象，可以使用`deep`关键字

```html
<template>
  <div>
    {{ obj.name }}
    <button @click="changeName">修改name</button>
  </div>
</template>

<script>
// 注意，以下为错误示范！
export default{
  data(){
    return {
      obj: {
        name: "张三",
        age: 20,
      }
    }
  },
  methods: {
    changeName(){
      this.obj.name="李四";
    }
  },
  watch: {
    obj: {
      handler: function(){
        console.log("obj changed!");
      },
      deep: true
    }
  }
}
</script>
```

**注意！如果只是修改Object对象的某个参数，那么`oldValue`和`newValue`值是完全一样的**

## 同时监听两个变量

```js
watch: {
  prop1: function(){
    if(!this.runFun){
      this.fun();
      this.runFun=true;
      setTimeout(()=>{
        this.fun=false;
      }, 200)
    }
    // 注意自定义等待时间
  },
  prop2: function(){
    if(!this.runFun){
      this.fun();
      this.runFun=true;
      setTimeout(()=>{
        this.fun=false;
      }, 200)
    }
  }
}
```