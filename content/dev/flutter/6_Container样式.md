---
type: docs
---

# Container样式

## 颜色

```dart
return Container{
  // 红色
  color: Colors.red,
  // 或者自定义RGB色彩
  // color: Color.fromARGB(255, 123, 123, 123),
};
```

**注意不能这样使用**：

```dart
return Container{
  color: Colors.red,
  decoration: BoxDecoration{
    // 其它代码
  }
};
```

如果需要`decoration`，这样使用：

```dart
return Container{
  decoration: BoxDecoration{
    color: Colors.red,
    // 其它样式
  }
};
```

## 渐变色

```dart
retrun Container(
  decoration: BoxDecoration{
    gradient: LinearGradient(
      // 开始的位置
      begin: Alignment.topLeft,
      // 结束为止
      end: Alignment.bottomRight,
      // 关键点
      stops: [0.0, 1.0],
      // 颜色
      colors: [Colors.red, Color.fromARGB(255, 255, 154, 147)]
    )
    // 其它代码
  }
)
```

注意，颜色的数量和关键点的数量要相同，即`stops.length == colors.length`

## 阴影

```dart
return Container(
  decoration: BoxDecoration{
    boxShadow: [
      BoxShadow(
        // 颜色
        color: Colors.grey.withOpacity(0.1),
        // 阴影半径
        spreadRadius: 1,
        // 模糊半径
        blurRadius: 5,
      ),
    ]
  }
);
```

## 圆角

```dart
return Container(
  decoration: BoxDecoration{
    // 圆角10
    borderRadius: BorderRadius.circular(10),
  }
);
```

## 边框
```dart
return Container(
  decoration: BoxDecoration{
    // 全部的边框红色，宽度为1
    border: Border.all(
      color: Colors.red,
      width: 1.0,
    ),
  }
);
```

也可以这样使用：

```dart
Container(
  border: Border(
    // 顶部边框
    top: BorderSide(
      color: Colors.red,
      width: 1.0,
    ),
    // 底部边框
    bottom: BorderSide(
      color: Colors.blue,
      width: 1.0,
    ),
  ),
);
```

## 需要过渡动画的Container


可以使用`AnimatedContainer`代替`Container`实现有过渡动画的`Container`


例如颜色的过渡变化
```dart

// 将Color作为属性传入AnimatedContainer
Color containerColor=Colors.red;

return AnimatedContainer(
  // 注意，必要的属性Duration，标识变换过渡时间
  duration: const Duration(milliseconds: 200)
  width: 100,
  height: 100,
  color: containerColor,
);
```

这样当修改`containerColor`这个变量的时候，`Container`就可以实现颜色过渡效果