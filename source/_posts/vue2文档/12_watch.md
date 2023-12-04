---
title: 【Vue】watch
date: 2023-12-04 10:17:41
tags:
- Vue
categories: 
- 开发
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