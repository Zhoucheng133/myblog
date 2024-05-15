---
type: docs
weight: 9
---

# Scaffold

**注意对于移动端而言需要设置Scaffold一些内容，对于桌面端而言可以选择性使用**

## Material Theme

对于一般的Flutter项目，结构是这样的：

```dart
void main(){
  runApp(MainApp());
}

class MainApp extends StatefulWidget {
  const MainApp({super.key});

  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: // 界面Widget
      ),
    );
  }
}
```

对于主要的`MaterialApp`而言：

如果是`Android`设备，你也许不需要任何设置，但是对于`iOS`设备而言，`Material UI`中的水波纹效果是不需要的（当然可以保留，但是不符合`iOS`的设计风格，可以这样去除水波纹效果：

```dart
return MaterialApp(
  // 设置theme
  theme: ThemeData(
    highlightColor: Colors.transparent,
    splashColor: Colors.transparent,
  ),
  home: Scaffold(
    body:  // 界面Widget
  ),
);
```

## 组件

### AppBar

顶部栏，一般显示当前页面的标题：

```dart
String title="主页"
return Scaffold(
  appBar: AppBar(
    title: Text(title), // 设置appBar文字
    leading: Icon(Icons.home), // AppBar左侧内容
    action: Icon(Icons.add), // AppBar右侧内容
    flexibleSpace: SizedBox(), // 灵活区域，可以添加图片修改等
    backgroundColor: Colors.white, // 背景颜色
    foregroundColor: Colors.blue, // 前景色
  ),
);
```

### BottomNavigationBar

底部导航栏，导航到不同的页面。注意，`BottomNavigationBar`要求数量不得小于2

```dart
int curIndex=0;
return Scaffold(
	bottomNavigationBar: BottomNavigationBar(
    currentIndex: curIndex, // 当前的索引值
    onTap: (index){}, // 点击item操作（一般为setState currentIndex）
    items: [], // 具体的item
    backgroundColor: Colors.white, // 背景颜色
    selectedItemColor: Colors.blue, // 选中的颜色
    unselectedItemColor: Colors.grey, // 没有选中的颜色
  ),
);
```

#### items

```dart
items: [
  BottomNavigationBarItem(
    icon: Icon(Icons.home), // 图标是什么
    label: "主页", //文本显示什么
  ),
  // ... (至少写两个BottomNavigationBarItem)
]
```



### FloatingActionButton

（默认情况下）悬浮在右侧的按钮，默认为圆形

```dart
return Scaffold(
  floatingActionButton: FloatingActionButton(
    onPressed: (){}, // 按下后的操作
    child: Icon(Icons.add), // 图标是什么
    foregroundColor: Colors.blue, // 前景色
    backgroundColor: Colors.white, // 背景颜色
  ),
);
```

## 一些问题

对于`BottomNavigationBar`，会出现当使用软键盘的时候被软键盘托起，这时候需要这样修改：

```dart
return Scaffold(
  // 添加下面这行
  resizeToAvoidBottomInset: false,
  // ...
);
```
