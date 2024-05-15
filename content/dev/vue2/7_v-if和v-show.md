---
type: docs
title: v-if和v-show
weight: 7
---


## 用途

`v-if`和`v-show`用于判断这个组件是否显示，就结果而言没有区别

其中`v-if`会在条件为`true`的时候才会渲染，而`v-show`单纯只是不显示，会和其他组件一起渲染

如果要经常切换界面，建议使用`v-show`而不是`v-if`，但是`v-if`会加快页面加载的速度

## 使用

只需要在标签后面直接写`v-if="条件"`或者`v-show="条件"`，注意和其他属性用空格区分

- 单独变量判断

  ```html
  <template>
    <div>
      <div v-if="isShow">
        Hello world!
      </div>
    </div>
  </template>
  
  <script>
    export default {
      data(){
        return{
          isShown:false
        }
      }
    }
  </script>
  ```
  
  注意，`Hello world!`并不会显示，因为变量`isShown`的值为`false`
  
- 条件判断

  ```html
  <template>
    <div>
      <div v-if="isShow=='showIt'">
        Hello world!
      </div>
    </div>
  </template>
  
  <script>
    export default {
      data(){
        return{
          isShow:"showIt"
        }
      }
    }
  </script>
  ```
  
  注意，此时的`Hello world!`会显示，因为变量`isShow`的值为`showIt`
  
  注意，`v-if`和`v-show`后面的条件需要用引号，单引号或者双引号都可，但是需要注意如果设计字符串判断，需要引号混用：
  
  ✅`v-if="isShown='showIt'"`
  
  ❌`v-if="isShown="showIt""`
