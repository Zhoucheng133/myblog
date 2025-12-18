# 嵌套Widget

方便随时调用，可以在一个Widget中调用另外一个Widget

## 基本使用

父层Widget

```dart
class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
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
class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        childContent(msg: "Hello"),// [!code ++]
        childContent(msg: "World!"),// [!code ++]
      ]
    );
  }
}
```

子层Widget

```dart
class childContent extends StatefulWidget {
  final String msg;// [!code ++]

  const childContent({super.key});  // [!code --]
  const childContent({super.key, required this.msg});// [!code ++]

  @override
  State<childContent> createState() => _childContentState();
}

class _childContentState extends State<childContent> {
  @override
  Widget build(BuildContext context) {
    // 注意调用参数时候添加widget
    return Text(widget.msg);// [!code ++]
  }
}
```

## 携带可选参数

父层Widget

```dart
class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        childContent(),// [!code ++]
        childContent(msg: "World!"),// [!code ++]
      ]
    );
  }
}
```

子层Widget

```dart
class childContent extends StatefulWidget {
  final String msg;// [!code ++]

  const childContent({super.key});  // [!code --]
  const childContent({super.key, this.msg = "Hello"});// [!code ++]

  @override
  State<childContent> createState() => _childContentState();
}

class _childContentState extends State<childContent> {
  @override
  Widget build(BuildContext context) {
    // 默认为"Hello"
    return Text(widget.msg);// [!code ++]
  }
}
```

## 携带回调函数

父层Widget

```dart
class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {

  void fun(){
    print("Hello world!");
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        childContent(functionCallBack: () => fun()),// [!code ++]
        childContent(functionCallBack: () => fun()),// [!code ++]
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
  final VoidCallback functionCallBack;// [!code ++]

  const childContent({super.key});  // [!code --]
  const childContent({super.key, required this.functionCallBack});// [!code ++]

  @override
  State<childContent> createState() => _childContentState();
}

class _childContentState extends State<childContent> {
  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: () => widget.functionCallBack(),// [!code ++]
      child: Text("按钮"),
    );
  }
}
```
:::warning
使用`VoidCallback`类型的回调函数**不能**添加任何参数
:::

## 携带有参数的回调函数

父层Widget

```dart
class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {

  void fun(val){
    print(val);
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        childContent(functionCallBack: (val) => fun(val)),// [!code ++]
        childContent(functionCallBack: (val) => fun(val)),// [!code ++]
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
  final ValueChanged functionCallBack;// [!code ++]

  const childContent({super.key});  // [!code --]
  const childContent({super.key, required this.functionCallBack});// [!code ++]

  @override
  State<childContent> createState() => _childContentState();
}

class _childContentState extends State<childContent> {
  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: () => widget.functionCallBack("Hello!"),// [!code ++]
      child: Text("按钮"),
    );
  }
}
```

:::tip
使用`VoidCallback`类型的回调函数只能添加**一个参数**，如果需要携带多个参数，可以将其打包成`Map`类型的参数传递：
:::

```dart
void callBackFunction(){
  var val={
    msg: "Hello world!",
    code: 0,
  };
  widget.functionCallBack(val);
}
```