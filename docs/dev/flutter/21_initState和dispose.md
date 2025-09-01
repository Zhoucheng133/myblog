# initState和dispose

## initState

initState一般用于这个`Widget`初始化的时候执行的操作，格式如下:

```dart
@override
void initState(){
  // 注意添加这一行，一般放在第一行
  super.initState();

  // 执行其它操作
}
```

## dispose

dispose一般用于这个`Widget`被销毁的时候执行的操作，格式如下:

```dart
@override
void dispose() {
  // 执行其它操作

  // 注意添加这一行，一般放在最后一行
  super.dispose();
}
```

## 触发条件

一般来说每一次创建`Widget`的时候都会触发一次`initState`，每一次销毁`Widget`都会触发一次`dispose`

比如这样的判定:

```dart
return Container(
  child: val==true ? childWidget1() : childWidget2()
)
```
当`val`初始值为`true`的时候，会触发一次`childWidget1`的`initState()`  
当`val`值为`true`变为`false`的时候，会触发一次`childWidget1`的`dispose()`和`childWidget2`的`initState()`

## 注意事项

如果在`initState()`中创建了监听器，比如`ever`或者`.listener`，**那么务必在`dispose()`方法中将其销毁，否则会出现重复监听的情况**