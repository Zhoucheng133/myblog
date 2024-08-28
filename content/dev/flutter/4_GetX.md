---
type: docs
title: GetX
weight: 4
---


GetX是在`Flutter`中创建全局变量/自定义路由/多语言支持等功能的一个依赖

## 安装

在项目的命令行中执行：

```bash
flutter pub add get
```

## 使用

**建议在一个独立的`dart`文件中创建所有全局变量的类**

### 创建变量

```dart
import 'package:get/get.dart';
class Controller extends GetxController{
  // 注意在变量的最后添加".obs"用于实时检测变量变化
  var paraX="Hello world!".obs;
}
```

### 创建赋值函数

```dart
import 'package:get/get.dart';
class Controller extends GetxController{
  // 注意在变量的最后添加".obs"用于实时检测变量变化
  var paraX="Hello world!".obs;
  // 注意更新的是变量的"value"，直接给变量赋值无效
  void updateParaX(data) => paraX.value=data;
}
```

### 在Widget中使用

```dart
import 'package:get/get.dart';
// 别忘了导入全局变量的文件
import 'package:para.dart'
// 可以使用StatefulWidget
class myApp extends StatefulWidget{
  // 获取变量
  final Controller c = Get.put(Controller());
  @override
  Widget build(BuildContext context){
    return Center(
      child: Obx(()=>{
        Text(
          // 不需要添加value属性，直接使用
          c.paraX
        )
      })
    )
  }
}
```
**⚠️注意，如果Obx(()=>)中不包含任何GetX变量会报错**

### 函数中更新

```dart
import 'package:get/get.dart';
import 'package:para.dart'
class myApp extends StatefulWidget{
  final Controller c = Get.put(Controller());
  @override
  Widget build(BuildContext context){
    return Center(
      child: TextButton(
        onPressed: (){
          // 调用更新函数
          c.updateParaX("Hello, Flutter!")
        },
        child: Text("按钮")
      )
    )
  }
}
```

### 监听变量

创建的变量如下：
```dart
import 'package:get/get.dart';
class Controller extends GetxController{
  var paraX="Hello world!".obs;
}
```

在StatefulWidget中监听变量

```dart
import 'package:get/get.dart';
import 'package:para.dart'
class myApp extends StatefulWidget{
  final Controller c = Get.put(Controller());

  @override
  void initState() {
    super.initState();
    // ever([arg],(callback){})
    ever(c.paraX, (callback) {
      // 如果发生了更新，会执行这里的函数
    });
  }

  @override
  Widget build(BuildContext context){
    return //...
  }
}
```

**⚠️注意，如果这个Widget可能会被销毁，务必在销毁的同时销毁监听**

```dart
import 'package:get/get.dart';
import 'package:para.dart'
class myApp extends StatefulWidget{
  final Controller c = Get.put(Controller());

  // 注意变量类型
  late Worker listener;

  @override
  void initState() {
    super.initState();
    listener = ever(c.paraX, (callback) {
      // 监听函数
    });
  }

  @override
  void dispose() {
    super.dispose();
    // 注意销毁监听
    listener.dispose();
  }

  @override
  Widget build(BuildContext context){
    return //...
  }
}
```

## 跳转路由

GetX可以快捷地跳转到某个路由

你需要先修改`MaterialApp`为`GetMaterialApp`

```dart
return GetMaterialApp(
  home: // 页面内容
)
```

这样跳转路由

```dart
Get.to(()=>newPage());
```

## 多语言

首先需要创建语言的`Map`，例如这样
```dart
// lang/zh_cn.dart
const Map<String, String> zhCN = {
  'home': '主页',
  'settings': '设置'
  // 其它内容
};
```

```dart
// lang/en_us.dart
const Map<String, String> enUS = {
  'home': 'Home',
  'settings': 'Settings'
  // 其它内容
};
```

在`main.dart`中定义它

```dart
class MainTranslations extends Translations {
  @override
  Map<String, Map<String, String>> get keys => {
    'en_US': enUS,
    'zh_CN': zhCN,
  };
}
```

在`GetMaterialApp`中使用它

```dart
return GetMaterialApp(
  translations: MainTranslations(),   // 在这里调用
  localizationsDelegates: const [
    GlobalMaterialLocalizations.delegate,
    GlobalWidgetsLocalizations.delegate,
    GlobalCupertinoLocalizations.delegate
  ],
  locale: const Locale('zh', 'CN'),   // 默认语言
  supportedLocales: const [
    Locale('en', 'US'),
    Locale('zh', 'CN'),
  ],
)
```

在Widget中使用翻译

```dart
return Text(
  'home'.tr
)
```

更新语言

```dart
var locale=Locale('en', 'US');
Get.updateLocale(locale);
```