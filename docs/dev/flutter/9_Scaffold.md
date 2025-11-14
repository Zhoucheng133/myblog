# Scaffold

对于`MaterialApp`，见 [24: MaterialApp](/dev/flutter/24_MaterialApp)

## 基本参数

```dart
return Scaffold(
  backgroundColor: Colors.white, // 背景颜色
  resizeToAvoidBottomInset: false, // 见文末常见问题
  body: Home(), // 页面入口，这里是一个Widget
  app: AppBar(), // 顶部栏，见组件-AppBar
  bottomNavigationBar: BottomNavigationBar(), // 底部导航栏，见组件-BottomNavigationBar
  floatingActionButton: FloatingActionButton(), // 浮动按钮，见组件-FloatingActionButton
)
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

:::tip
对于`BottomNavigationBar`，会出现当使用软键盘的时候被软键盘托起，这时候需要这样修改：
:::

```dart
return Scaffold(
  // 添加下面这行表示不希望受到软键盘的影响
  resizeToAvoidBottomInset: false,  // [!code ++]
  // ...
);
```

:::tip
新版本的Flutter中AppBar可能会受到ListView的影响，这时候需要这样修改
:::

```dart
return Scaffold(
  appBar: AppBar(
    scrolledUnderElevation: 0.0,  // [!code ++]
    // ...
  ),
);
```
