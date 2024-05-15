---
type: docs
title: Dialog
weight: 17
---


注意，本文使用的是Flutter原生的Material风格Dialog和iOS风格的Dialog

在[pub.dev](https://pub.dev)中有其它风格的Dialog，参加其开发者文档

## 参数传递

注意，如果你需要在某个函数中实现`showDialog`方法，需要传递一个context参数：`BuildContext context`，理论上如果没有手动传递这个参数，Flutter会寻找上下文中最近的context，**但是不建议这样使用**，务必在使用的时候添加上这样的参数

```dart
void dialogFunction(BuildContext context){
  showDialog(
    context: context,
    // 其它内容...
  );
}
```

## Material Dialog

```dart
showDialog(
  context: context,
  builder: (context) {
    return AlertDialog(
      title: Text('提示'),
      content: Text('这是一个对话框'),
      actions: <Widget>[
        ElevatedButton(
          onPressed: () {
            // 点击取消之后的操作
            Navigator.pop(context);
          }, 
          child: Text("取消")
        ),
        FilledButton(
          onPressed: () async {
            // 点击确定之后的操作
            Navigator.pop(context);
          }, 
          child: Text("确定")
        ),
      ],
    );
  },
);
```

## iOS Dialog

```dart
showDialog(
  context: context,
  builder: (context) {
    return CupertinoAlertDialog(
      title: Text('提示'),
      content: Text('这是一个iOS风格的对话框'),
      actions: <Widget>[
        CupertinoDialogAction(
          child: Text('取消'),
          onPressed: () {
            // 点击取消之后的操作
            Navigator.pop(context);
          },
        ),
        CupertinoDialogAction(
          child: Text('确定'),
          onPressed: () {
            // 点击确定之后的操作
            Navigator.pop(context);
          },
        ),
      ],
    );
  },
);
```

## 在`Dialog`中使用`setState`

```dart
showDialog(
  context: context, 
  builder: (BuildContext context)=>AlertDialog(
    title: /** 标题 */,
    content: StatefulBuilder(
      builder: (BuildContext context, StateSetter setState) {
        // ...
      },
    ),
    actions: [
      // ...
    ]
  ),
);
```