# GetX

GetX是在`Flutter`中创建全局变量/自定义路由/多语言支持等功能的一个依赖

## 安装

在项目的命令行中执行：

```bash
flutter pub add get
```

## 变量

### 创建变量

**建议在一个独立的`dart`文件中创建所有全局变量的类**

:::warning
注意这个类定义需要添加`extends GetxController`
:::

```dart
import 'package:get/get.dart';
class Controller extends GetxController{
  // 注意在变量的最后添加".obs"用于实时检测变量变化
  RxString paraX="Hello world!".obs;// [!code ++]
  RxList list=<String>[].obs;// [!code ++]
}
```

### 在Widget中使用

:::tip
对于非`Map`或者`List`类型的GetX变量需要添加上`.value`

`Map`或者`List`不需要
:::

#### 一般变量

```dart
import 'package:get/get.dart';
// 别忘了导入全局变量的文件
import 'package:para.dart'
// 可以使用StatefulWidget
class MyApp extends StatefulWidget{
  // 获取变量
  final Controller c = Get.put(Controller());// [!code ++]
  // 你可以给这个实例化的Controller添加一个Tag，有什么用后面有讲到
  // final Controller c=Get.put(Controller(), tag="initVal");
  @override
  Widget build(BuildContext context){
    return Center(
      child: Obx(()=>{// [!code ++]
        Text(// [!code ++]
          c.paraX.value// [!code ++]
        )// [!code ++]
      })// [!code ++]
    )
  }
}
```

#### Map或者List变量

```dart
import 'package:get/get.dart';
// 别忘了导入全局变量的文件
import 'package:para.dart'
// 可以使用StatefulWidget
class MyApp extends StatefulWidget{
  // 获取变量
  final Controller c = Get.put(Controller());// [!code ++]
  @override
  Widget build(BuildContext context){
    return ListView.builder(// [!code ++]
      itemCount: c.list.length,// [!code ++]
      itemBuilder: (BuildContext context, int index) => Text(c.list[index])// [!code ++]
    )// [!code ++]
  }
}
```

列表详细用法见[列表](23_列表)

:::warning
如果`Obx(()=>)`中不包含任何GetX变量会报错
:::

### 更新变量

#### 一般变量赋值

```dart
import 'package:get/get.dart';
import 'package:para.dart'
class MyApp extends StatefulWidget{
  final Controller c = Get.put(Controller());
  @override
  Widget build(BuildContext context){
    return Center(
      child: TextButton(
        onPressed: (){
          // 直接赋值更新变量
          c.paraX.value="Hello, Flutter!"// [!code ++]
        },
        child: Text("按钮")
      )
    )
  }
}
```

#### Map或者List变量赋值

```dart
import 'package:get/get.dart';
import 'package:para.dart'
class MyApp extends StatefulWidget{
  final Controller c = Get.put(Controller());
  @override
  Widget build(BuildContext context){
    return Center(
      child: TextButton(
        onPressed: (){
          // 不需要使用.value
          c.list[1]="hello";// [!code ++]
          c.list[2]="world!";// [!code ++]
          // 需要在之后刷新这个变量
          c.list.refresh();// [!code ++]
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
class MyApp extends StatefulWidget{
  final Controller c = Get.put(Controller());

  @override
  void initState() {
    super.initState();
    // ever([arg],(callback){})
    ever(c.paraX, (callback) {// [!code ++]
      // 如果发生了更新，会执行这里的函数 //[!code ++]
    });// [!code ++]
  }

  @override
  Widget build(BuildContext context){
    return //...
  }
}
```

:::warning
如果这个Widget可能会被销毁，务必在销毁的同时销毁监听
:::

```dart
import 'package:get/get.dart';
import 'package:para.dart'
class MyApp extends StatefulWidget{
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
    listener.dispose();// [!code ++]
  }

  @override
  Widget build(BuildContext context){
    return //...
  }
}
```
## 跨Widget调用

在一个Widget中调用另外一个Widget方法

下面示例为`B Widget`调用`A Widget`的`printHello()`方法

```dart

// Controller
class Controller extends GetxController{
  var word='hello Flutter'.obs;
  
  void printHello(){
    print(word.value);
  }
}

// A Widget
class A extends StatefulWidget{
  // 如果只调用一次，可以忽略tag属性，这个属性用于防止调用多次导致无法区分
  final Controller c = Get.put(Controller(), tag="controller");// [!code ++]
  return // ...其他内容
}

// B Widget
class B extends StatefulWidget{
  return FilledButton(
    onPressed: (){
      // 注意，可能会遇到找不到的情况（如果有），因此使用try-catch
      try{
        // 如果只调用一次，可以忽略tag属性，同上
        final Controller c = Get.find(tag="controller");// [!code ++]
        c.printHello();
      }catch(_){}
    },
    child: Text(
      chid: 'printHello()'
    )
  );
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

> [!IMPORTANT]
> 你需要先前往[本地化](15_本地化)文章中设置本地化

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
  // 在这里调用
  translations: MainTranslations(),// [!code ++]
  localizationsDelegates: const [
    GlobalMaterialLocalizations.delegate,
    GlobalWidgetsLocalizations.delegate,
    GlobalCupertinoLocalizations.delegate
  ],
  // 默认语言(这里使用的系统语言)
  locale: Get.deviceLocale// [!code ++]
  supportedLocales: const [
    Locale('en', 'US'),
    Locale('zh', 'CN'),
  ],
  // 没有匹配支持语言的回退语言
  fallbackLocale: Locale('en', 'US'),// [!code ++]
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

### 如果需要添加切换语言的功能

```dart
// 自定义的语言类
class LanguageType{
  String name;    // 语言名称
  Locale locale;  // 语言

  LanguageType(this.name, this.locale);
}

// 语言列表
List<LanguageType> get supportedLocales => [
  LanguageType("English", Locale("en", "US")),
  LanguageType("简体中文", Locale("zh", "CN")),
  LanguageType("繁體中文", Locale("zh", "TW")),
];

class Controller extends GetxController{
  // 当前语言
  Rx<LanguageType> lang=Rx(supportedLocales[0]);

  late SharedPreferences prefs;

  // 初始化语言
  Future<void> init() async {
    prefs=await SharedPreferences.getInstance();

    int? langIndex=prefs.getInt("langIndex");

    if(langIndex==null){
      final deviceLocale=PlatformDispatcher.instance.locale;  // 获取设备语言
      final local=Locale(deviceLocale.languageCode, deviceLocale.countryCode);
      int index=supportedLocales.indexWhere((element) => element.locale==local);
      if(index!=-1){
        lang.value=supportedLocales[index];
        lang.refresh();
      }
    }else{
      lang.value=supportedLocales[langIndex];
    }
  }

  // 切换语言
  void changeLanguage(int index){
    lang.value=supportedLocales[index];
    prefs.setInt("langIndex", index);
    lang.refresh();
    Get.updateLocale(lang.value.locale);
  }
}

```

在主函数中初始化

```dart
Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final controller=Get.put(Controller());// [!code ++]
  await controller.init();// [!code ++]
  // ...其它
}
```

在`GetMaterialApp`中添加

```dart
return Obx(()=>
  GetMaterialApp(
    translations: MainTranslations(),// [!code ++]
    locale: controller.lang.value.locale,// [!code ++]
    debugShowCheckedModeBanner: false,
    localizationsDelegates: [
      GlobalMaterialLocalizations.delegate,
      GlobalWidgetsLocalizations.delegate,
      GlobalCupertinoLocalizations.delegate
    ],
    supportedLocales: supportedLocales.map((item)=>item.locale).toList(),// [!code ++]
    fallbackLocale: Locale('en', 'US'),// [!code ++]
    // 其它内容
  )
);
````