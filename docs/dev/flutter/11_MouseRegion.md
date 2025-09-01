# MouseRegion

## 修改鼠标样式

```dart
return MouseRegion(
  // 当鼠标移动到这里的时候使用"SystemMouseCursors.click"这个样式
  cursor: SystemMouseCursors.click,
  child: // ...
);
```

## 悬浮操作

```dart
return MouseRegion(
  // 注意所有的函数都有参数
  onEnter: (event) {
    // 鼠标进入，即hover的操作
  },
  onExit: (event) {
    // 鼠标离开的操作
  },
  child: // ...
);
```

## 通过悬浮改变样式

```dart
bool hover=false;
return MouseRegion(
  onEnter: (e){
    // 如果鼠标进入，则设置hover为true
    setState((){
      hover=true;
    });
  },
  onExit: (e){
    // 如果鼠标离开，则设置hover为false
    setState((){
      hover=false;
    });
  },
  child: AnimatedContainer(
    // 过渡动画时长尾300毫秒
    duration: Duration(milliseconds: 300),
    // 通过hover这个参数判断需要将AnimatedContainer设定为什么颜色
    color: hover==true ? Colors.grey : Colors.white,
  )
);
```

