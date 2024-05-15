---
type: docs
---

# v-for

## 作用

用于循环某个相同的组件，可以根据数组变量的值自动扩展

## 需要准备的内容

- 需要循环的前端代码：

  ```html
  <div>这里面用于循环的内容</div>
  ```

- 需要循环的数组：

  ```js
  // 注意需要补充array数组的内容
  data(){
    return {
      list:[]
    }
  }
  ```

## 使用

```html
<div v-for="(item,index) in list">这里面用于循环的内容</div>
```

下面为list参数例子

```js
list: [
  {name: "张三", age: 20},
  {name: "李四", age: 21},
  {name: "王五", age: 22}
]
```

其中在v-for中，参数item和index的作用如下：

- item：数组中每个元素的值
   在例子中，第一个item​​为对象：{name: "张三", age: 20}​​，第二个item​​为对象：{name: "李四", age: 21}​​，以此类推
- index：索引值，这个索引初始值从0开始

譬如如下的代码：

```html
<div v-for="(item,index) in list">
  序号{{index}} &nbsp 姓名：{{item.name}}，年龄：{{item.age}}
</div>
list: [
  {name: "张三", age: 20},
  {name: "李四", age: 21},
  {name: "王五", age: 22}
]
```

那么显示的结果为：

> 序号0 姓名：张三，年龄：20
>
> 序号1 姓名：李四，年龄：21
>
> 序号2 姓名：王五，年龄：22