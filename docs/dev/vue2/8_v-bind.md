# v-bind

## 简写

v-bind:等同于:，通过绑定vue的参数来实现调整各种样式

## 常见的用法

- `:style="{}"`：通过vue参数绑定style样式表
   例如：

  ```html
  <div :style="{'width': shownWidth + 'px'}"></div>
  ```

  这句话表示这个div标签的宽度由shownWidth这个参数决定
   另注：:style​​后需要添加双引号，双引号内的属性用单引号

- `:class=""`：通过vue参数绑定class类
   例如：

  ```html
  <div :class="isActive ? 'activeClass' : 'inactiveClass'"></div>
  ```

  这句话表示div的class由isActive这个参数决定，如果isActive为true，那么class=activeClass，否则class=inactiveClass

- `:id=""`：通过vue参数绑定id，同class

- 其它标签自带属性，例如：:disabled=""：通过vue参数绑定disable属性（针对部分表单中的标签）

## 多个参数

使用参数中的数组传递参数即可

```html
<div :class="isActive ? ['activeClass1','activeClass2'] : 'inactiveClass2'"></div>
```

## 使用函数判断

使用函数而不是一个三则判断式来判断绑定vue参数

```html
<div :class="isActive() ? 'activeClass1' : 'inactiveClass2'"></div>
methods:{
  isActive:function(){
    // 判断代码
    return val;
  }
}
```

⚠️注意，不要使用异步代码：

```js
// 错误示范，下面的代码不要在v-bind中使用
methods:{
  isActive:async function(){
    // 判断代码
    return val;
  }
}
```