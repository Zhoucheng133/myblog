# GestureDetector

使用`Container`作为一个按钮

## 点击的操作

```dart
return GestureDetector(
  onTap: (){
    // 按下的操作
  },
  child: Container(
    decoration: BoxDecoration(
      
      // 样式
    ),
    child: Center(
      child: Text("按钮")
    )
  )
);
```

## 右键操作

```dart
return GestureDetector(
  onSecondaryTap: (){
    // 右键操作
  },
  child: // 其它Widget
)
```

## 滑动操作

```dart
return GestureDetector(
  onVerticalDragUpdate: (details){
    // 上下滑动的操作
    if(details.delta.dy<-10){
      // 向上滑动为负值，向上滑动超过10的操作
    }
    if(detail.delta.dy>10){
      // 向下滑动为正值，向下滑动超过10的操作
    }
  },
  onHorizontalDragUpdate: (details){
    if(details.delta.dy<-10){
      // 向左滑动为负值，向左滑动超过10的操作
    }
    if(detail.delta.dy>10){
      // 向右滑动为正值，向右滑动超过10的操作
    }
  },
  child: Container(
    decoration: BoxDecoration(
      // 样式
    ),
    child: Center(
      child: Text("按钮")
    )
  )
);
```

## 备注

注意`Container`可能出现“空心”情况，例如：

```dart
return GestureDetector(
  onTap: (){
    // 按下的操作
  },
  child: Container(
    child: Text("按钮")
  )
);
```

此时只有点击“按钮”这个`Text`的时候才会有效，解决办法为：

```dart
return GestureDetector(
  onTap: (){
    // 按下的操作
  },
  child: Container(
    color: Colors.transparent,	// 添加颜色或者这样使用透明颜色
    child: Text("按钮")
  )
);
```

