---
type: docs
---

# Grid布局

## 一般网格

把外部的`Container`想象成一个网格，分割为长`x`，宽`y`的网格，然后根据所占长和宽来布置一个内容，譬如：

<img src="https://s2.loli.net/2023/07/30/rIRdfqiWpEaDuY1.png" width="500px">

我们把外部的`Container`切分为长7宽5的网格，然后我们需要的是左上角4x3的内容，我们需要这样来设计：

- ### 外部Container

  首先需要确定外部`Container`的大小，并将其`display`修改为`grid`

  ```css
  .container{
    /* width: ; */
    /* height: ; */
  
    display: grid;
  }
  ```

  然后我们需要添加`grid`的属性：

  ~~grid-gap~~（已弃用）或者`gap`：格子之间的间距，默认为0

  `grid-template-columns`：水平方向需要分成多少列

  `grid-template-rows`：垂直方向需要分成多少行

  注意，`grid-template-columns`和`grid-template-rows`后面接的不是数字，而是一个类似于数组的存在*

  *详细见[这里](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-columns)，总结起来有几种写法

  1. `30 px`：使用像素
  2. `auto`：自动宽度
  3. `1 fr`：按照比例划分（固定长度/宽度）

  这样，我们就可以得到`Container`的结构样式表

  ```css
  .container{
    /* 如果需要宽度 width: ; */
    /* 如果需要高度 height: ; */
    /* 如果需要间隙 grid-gap: ; */
  
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    /* 当然也可以写成: grid-template-columns: 1fr 1fr 1fr ... 但是这样太麻烦了 */
    grid-template-rows: repeat(5, 1fr);
    /* 同理 */
  }
  ```

  使用上面的代码可以得到一个每个格子**均等**的网格

  使用这样的代码得到的便是一个没有内容的网格：

  <img src="https://s2.loli.net/2023/07/30/djXWHfybEIZqOGs.png" width="500px">

  下面我们就可以在网格内创建`cell`了

- ### 内部Cell

  对于内部的`cell`，首先要根据上图确定位置，比如说我需要上图网格中，长宽都为2格子，处于中间靠下的位置

  也就是说这个我们需要的`cell`宽度范围是2 ～ 4 (-3 ～ -1)，长度范围是2～4 (-4～-2)，

  那么我们的代码如下：

  ```css
  .cell{
    grid-row: 2/4;  
    /* 当然也可以写成grid-row: -3/-1 */
    grid-column: 2/4;
    /* 这里也可以写成grid-row: -4/-2 */
    /* background-color: red; */
  }
  ```

  这样我们就可以得到我们想要的位置和大小了：

  <img src="https://s2.loli.net/2023/07/30/aAYxotD1X3gmFq5.png" width="500px">

  另附：关于Grid网格布局（等距）设计页面，[点此跳转到Gitee](https://gitee.com/Ryan-zhou/grid-layout-gui)

## 作为单独行/列设计

  可以用于替代`flex`布局，比如单独行：

  <img src="https://s2.loli.net/2023/07/30/YDifaoVc1SIHBWK.png"  width="500px">

  其代码是这样的(`Container`)：

  ```css
  .container{
    display: grid;
    /* 分为4列，其中分别占30px, 50px, 自动宽度, 20px */
    grid-template-columns: 30px 50px auto 20px;
    width: 400px;
    height: 100px;
  }
  ```

  