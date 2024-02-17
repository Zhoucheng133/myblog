---
title: 【Flutter】Text样式
date: 2023-11-08 16:37:30
tags:
- Flutter
categories: 
- 开发
---

# Text样式

## 颜色

```dart
return Text(
  "Hello world!",
  style: TextStyle(
    // 在这里修改颜色
    color: Colors.red,
  )
)
```

## 字体大小

```dart
return Text(
  "Hello world!",
  style: TextStyle(
    // 在这里修改字体大小
    fontSize: 14,
  )
)
```

## 字体粗细

```dart
return Text(
  "Hello world!",
  style: TextStyle(
    // 在这里修改字体粗细
    fontWeight: FontWeight.bold,
  )
)
```

注意：由于默认字体无法完全支持中文的所有字体粗细，因此在默认情况下设置`fontWeight`可能对中文无效，如果要对中文使用，下一节`修改字体`

## 修改字体

### 获取字体

需要自备字体，可以从[这里下载](https://fonts.google.com/)，**注意语言**

下载的时候会获取一个完整的字体包，包括粗体、细体和常规体等等，**注意根据需要导入到项目中，过多的字体会导致打包的App大小更大**

### 配置字体

在`pubspec.yaml`文件中导入字体，这里以`NotoSans`字体举例，字体文件存储在`assets/fonts`目录下

```yaml
flutter:
  fonts:
    - family: "Noto"
      fonts:
        - asset: assets/fonts/NotoSansSC-Bold.ttf
        - asset: assets/fonts/NotoSansSC-Regular.ttf
```

### 设置为默认字体

在创建`MaterialApp`的时候修改主题：

```dart
return MaterialApp(
  theme: ThemeData(
    // 在这里修改默认的字体
    fontFamily: "Noto",
  ),
  //其它代码...
);
```