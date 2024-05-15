---
type: docs
weight: 6
---

# Flex布局

## 水平Flex

默认就是水平的布局，如下的代码就是水平布局，`box`类中的所有内容都在一行里，从左到右排序

```css
.box{
  display: flex;
}
```

### 对齐方式

- 水平左边对齐
  ```css
  /** 默认情况就是左对齐的 */
  .box{
    display: flex;
    justify-content: flex-start;
  }
  ```
- 水平右对齐
  ```css
  .box{
    display: flex;
    justify-content: flex-end;
  }
  ```
- 水平居中
  ```css
  .box{
    display: flex;
    justify-content: center;
  }
  ```
- 垂直居上
  ```css
  /** 默认情况就是上对齐的 */
  .box{
    display: flex;
    align-items: flex-start;
  }
  ```
- 垂直居中
  ```css
  .box{
    display: flex;
    align-items: center;
  }
  ```
- 垂直居下
  ```css
  .box{
    display: flex;
    align-items: flex-end;
  }
  ```
## 垂直布局

需要手动设置`flex-direction`为`column`

```css
.box{
  display: flex;
  flex-direction: column;
}
```

### 对齐方式

设定水平和垂直对齐的方式与默认的水平布局的Flex相反，比如

```css
.box{
  display: flex;
  flex-direction: column;
  align-items: center;        /** 水平居中 */
  justify-content: flex-end;  /** 垂直居于下 */
}
```

## 非完全对齐

通常用于一个box中有不同对齐方式的使用

```html
<div class="box">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
</div>
```

```css
.item2{
  align-self: center;     /** item2垂直居中对齐 */
}
.item3{
  align-self: flex-end;   /** item3垂直居下对齐 */
}
.item{
  padding: 5px;
}
.box{
  display: flex;
  height: 200px;
  width: 500px;
}
```

## 伸缩比

伸缩比指的是Flex布局中的某个元素占比的大小

```html
<div class="box">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
</div>
```

注意，如果没有设置`flex-direction: column`，那么默认的主轴为水平方向，否则为垂直方向
```css
.item1{
  flex: 1;  /** item1元素在主轴占据的比例为1 */
}
.item2{
  flex: 2;  /** item1元素在主轴占据的比例为2 */
}
.item3{
  flex: 1;  /** item1元素在主轴占据的比例为1 */
}
.box{
  display: flex;
}
```

上述的代码显示的效果为，`item1`, `item2`和`item3`占据box宽度的`1/4`，`2/4`和`1/4`

注意，默认`flex: 0`，表示按照最小的空间给予元素，如果只有一个元素上有`flex`参数，那么无论`flex`的值为多少，都会尽可能大地占用主轴的剩余空间