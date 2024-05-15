---
type: docs
title: 嵌套Widget
weight: 18
---


方便随时调用，可以在一个Widget中调用另外一个Widget

## 基本使用

父层Widget

```dart
class myApp extends StatefulWidget {
  const myApp({super.key});

  @override
  State<myApp> createState() => _myAppState();
}

class _myAppState extends State<myApp> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        childContent(),
        childContent(),
      ]
    );
  }
}
```

子层Widget

```dart
class childContent extends StatefulWidget {
  const childContent({super.key});

  @override
  State<childContent> createState() => _childContentState();
}

class _childContentState extends State<childContent> {
  @override
  Widget build(BuildContext context) {
    return Text("Hello World!");
  }
}
```

## 携带参数

父层Widget

```dart
class myApp extends StatefulWidget {
  const myApp({super.key});

  @override
  State<myApp> createState() => _myAppState();
}

class _myAppState extends State<myApp> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        childContent(msg: "Hello"),
        childContent(msg: "World!"),
      ]
    );
  }
}
```

子层Widget

```dart
class childContent extends StatefulWidget {
  final String msg;

  const childContent({super.key, required this.msg});

  @override
  State<childContent> createState() => _childContentState();
}

class _childContentState extends State<childContent> {
  @override
  Widget build(BuildContext context) {
    // 注意调用参数时候添加widget
    return Text(widget.msg);
  }
}
```

注意，如果在子层Widget中使用`required`，那么这个参数必须要传递，如果没有携带，那么不一定需要传递

## 携带回调函数

父层Widget

```dart
class myApp extends StatefulWidget {
  const myApp({super.key});

  @override
  State<myApp> createState() => _myAppState();
}

class _myAppState extends State<myApp> {

  void fun(){
    print("Hello world!");
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        childContent(functionCallBack: () => fun()),
        childContent(functionCallBack: () => fun()),
        // 或者可以直接这样使用:
        // childContent(functionCallBack: fun),
      ]
    );
  }
}
```

子层Widget

```dart
class childContent extends StatefulWidget {
  final VoidCallback functionCallBack;

  const childContent({super.key, required this.functionCallBack});

  @override
  State<childContent> createState() => _childContentState();
}

class _childContentState extends State<childContent> {
  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: () => widget.functionCallBack(),
      child: Text("按钮"),
    );
  }
}
```

注意，使用`VoidCallback`类型的回调函数**不能**添加任何参数

## 携带有参数的回调函数

父层Widget

```dart
class myApp extends StatefulWidget {
  const myApp({super.key});

  @override
  State<myApp> createState() => _myAppState();
}

class _myAppState extends State<myApp> {

  void fun(val){
    print(val);
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        childContent(functionCallBack: (val) => fun(val)),
        childContent(functionCallBack: (val) => fun(val)),
        // 或者可以直接这样使用:
        // childContent(functionCallBack: fun),
      ]
    );
  }
}
```

子层Widget

```dart
class childContent extends StatefulWidget {
  final ValueChanged functionCallBack;

  const childContent({super.key, required this.functionCallBack});

  @override
  State<childContent> createState() => _childContentState();
}

class _childContentState extends State<childContent> {
  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: () => widget.functionCallBack("Hello!"),
      child: Text("按钮"),
    );
  }
}
```

注意，使用`VoidCallback`类型的回调函数只能添加**一个参数**，如果需要携带多个参数，可以将其打包成`Map`类型的参数传递：

```dart
void callBackFunction(){
  var val={
    msg: "Hello world!",
    code: 0,
  };
  widget.functionCallBack(val);
}
```