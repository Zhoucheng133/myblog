---
title: 【Flutter】Container样式
date: 2023-11-08 16:37:26
tags:
- Flutter
categories: 
- 开发
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

